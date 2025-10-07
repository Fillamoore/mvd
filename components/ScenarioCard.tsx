// components/ScenarioCard.tsx - COMPLETE UPDATED VERSION
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import RankingBox from './RankingBox';
import ExpertMedia from './ExpertMedia';
import { useLocalStore } from '@/store/useLocalStore';
import type { ExpertMedia as ExpertMediaType, Resource } from '@/data/scenarios';
import { useShallow } from 'zustand/react/shallow';

interface ScenarioCardProps {
  scenarioId: number;
  moduleId: number;
  totalScenarios: number;
  prompt: string;
  responses: Array<{
    id: string;
    text: string;
  }>;
  expertRationales?: Array<{
    id: string;
    text: string;
    expertRationale: string;
    expertRanking: number;
    expertMedia?: ExpertMediaType;
    resources?: Resource[]; 
  }>;
  takeAway: string;
  overall: string; 
  readonly?: boolean;
}

const EMPTY_USER_RANKINGS: { [key: string]: number | null } = {};
const EMPTY_RANKING_DIRECTIONS: { [key: string]: boolean } = {};

export default function ScenarioCard({
  scenarioId,
  moduleId,
  totalScenarios,
  prompt,
  responses,
  expertRationales,
  overall,
  takeAway,
  readonly = false,
}: ScenarioCardProps) {

  const [isHydrated, setIsHydrated] = useState(false);
  const [isModuleComplete, setIsModuleComplete] = useState(false);

  // Get store state and actions
  const { 
    userRankings, 
    userRankingDirections, 
    isRevealed,
    currentScenario,
    shouldComplete // ADDED: Completion trigger flag
  } = useLocalStore(useShallow((state) => {
    const currentScenario = state.pickUpAndPutDown[moduleId.toString()]?.currentScenario;
    return {
      userRankings: (currentScenario?.userRankings || EMPTY_USER_RANKINGS) as { [key: string]: number | null },
      userRankingDirections: (currentScenario?.userRankingDirections || EMPTY_RANKING_DIRECTIONS) as { [key: string]: boolean },
      isRevealed: currentScenario?.isRevealed || false,
      currentScenario: currentScenario,
      shouldComplete: currentScenario?.shouldComplete || false // ADDED
    };
  }));

  const { 
    rankScenario, 
    revealScenario, 
    setExpertRankings, // This should be available here
    completeCurrentScenario,
    setNextScenario 
  } = useLocalStore();

  const isLastScenario = scenarioId === totalScenarios;

  const calculateScore = useMemo(() => {
    if (!expertRationales) return 0;
    let totalDifference = 0;
    let ratedResponses = 0;
    responses.forEach(response => {
      const userRanking = userRankings[response.id];
      const expertResponse = expertRationales.find(r => r.id === response.id);
      if (userRanking !== null && userRanking !== undefined && expertResponse) {
        totalDifference += Math.abs(userRanking - expertResponse.expertRanking);
        ratedResponses++;
      }
    });
    if (ratedResponses === 0) return 0;
    const averageDifference = totalDifference / ratedResponses;
    return Math.round(100 - (averageDifference / 2) * 100);
  }, [userRankings, expertRationales, responses]);

  const score = isRevealed ? calculateScore : 0;

  function getVaryWidth(textLength: number) {
    const vary = textLength % 40;
    const mobileOffset = Math.floor((vary / 40) * 10); 
    const desktopOffset = Math.floor((vary / 40) * 10); 
    return {
      mobile: 85 + mobileOffset, // 85–95%
      desktop: 60 + desktopOffset // 60–70%
    };
  } 

  // ADDED: Handle scenario completion with useCallback to avoid recreating on every render
  const handleScenarioCompletion = useCallback(() => {
    if (!currentScenario || !expertRationales) return;

    // Calculate expert rankings map
    const expertRankingsMap: { [key: string]: number } = {};
    expertRationales.forEach(response => {
      expertRankingsMap[response.id] = response.expertRanking;
    });

    // Create completed scenario record
    const completedScenario = {
      scenarioId: currentScenario.scenarioId,
      userRankings: { ...currentScenario.userRankings },
      expertRankings: expertRankingsMap,
      score: calculateScore,
      timestamp: new Date().toISOString(),
      dateStarted: currentScenario.dateStarted,
      dateCompleted: new Date().toISOString(),
    };

    // Save completion to store
    completeCurrentScenario(completedScenario);

    // Determine next scenario
    if (isLastScenario) {
      setIsModuleComplete(true);
      // Module completion logic can be added here
    } else {
      const nextScenarioId = scenarioId + 1;
      setNextScenario(nextScenarioId);
    }
  }, [currentScenario, expertRationales, calculateScore, isLastScenario, scenarioId, completeCurrentScenario, setNextScenario]);

  // ADDED: Effect to handle completion when triggered by DesktopControlButton
  useEffect(() => {
    if (shouldComplete && currentScenario && isRevealed) {
      handleScenarioCompletion();
    }
  }, [shouldComplete, currentScenario, isRevealed, handleScenarioCompletion]);

  useEffect(() => {
    const unsubscribe = useLocalStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    
    if (useLocalStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }
    
    return unsubscribe;
  }, []);

  // In ScenarioCard.tsx - SET EXPERT RANKINGS WHEN SCENARIO LOADS
  useEffect(() => {
    if (isHydrated && expertRationales) {
      const expertRankingsMap: { [key: string]: number } = {};
      expertRationales.forEach(response => {
        expertRankingsMap[response.id] = response.expertRanking;
      });
      setExpertRankings(moduleId, scenarioId, expertRankingsMap);
    }
  }, [isHydrated, expertRationales, moduleId, scenarioId, setExpertRankings]);

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      const currentValue = userRankings[responseId] ?? null;
      const currentDirection = userRankingDirections[responseId] ?? true;
      let newValue: number | null;
      let newDirection: boolean = currentDirection;
      
      if (currentValue === null) {
        newValue = 1;
        newDirection = true;
      } else if (currentDirection) {
        if (currentValue < 3) {
          newValue = currentValue + 1;
        } else {
          newValue = 2;
          newDirection = false;
        }
      } else {
        if (currentValue > 1) {
          newValue = currentValue - 1;
        } else {
          newValue = 2;
          newDirection = true;
        }
      }
      
      rankScenario(moduleId, scenarioId, responseId, newValue, newDirection);
    }
  };

  if (isModuleComplete) {
    return (
      <div className="scenario-card scenario-fade-in flex justify-center items-center h-screen">
        <div className="text-center p-8 bg-green-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-800">🎉 Congratulations! 🎉</h2>
          <p className="mt-4 text-xl text-green-700">You have completed this module.</p>
        </div>
      </div>
    );
  }

  {/*}
  if (!isHydrated) {
    return (
      <div className="scenario-card scenario-fade-in">
        <div className="prompt-card bg-lilac-400 rounded p-2 mb-6 text-left max-w-[60%]">
          <h3 className="text-sm leading-tight select-none text-black">{prompt}</h3>
        </div>
        <div className="text-center py-8 text-gray-500">Loading scenario...</div>
      </div>
    );
  }
  */}

  const { mobile, desktop } = getVaryWidth(prompt.length);
  const isMobile = window.innerWidth < 768; // or use a hook like useMediaQuery
  const promptWidthStyle = {width: `${isMobile ? mobile : desktop}%`};
  const containerRight = isMobile ? 'p-1' : 'pr-40';
  const containerLeft = isMobile ? 'py-1 pl-2 pr-1' : 'pl-40';

  return (
    <>
      <div className= {`scenario-card scenario-fade-in ${containerLeft}`}>

        <div
          className="prompt-card bg-lilac-400 rounded p-3 mb-4" 
          style={promptWidthStyle}
        >
          <h3 className="text-sm leading-tight select-none text-black" >{prompt}</h3>
        </div>
        
        <div className="responses-container select-none space-y-4">
                    
          {responses.map((response) => {

            const expertResponse = expertRationales?.find(r => r.id === response.id);
            
            const { mobile, desktop } = getVaryWidth(response.text.length);
            const widthStyle = {
              width: `${isMobile ? mobile : desktop}%`,
            };      


            return (
              <div 
                key={response.id} 
                className={`response-pair-container ml-auto ${containerRight}`} 
                style={widthStyle}
              >  
                <div
                  className="response-card text-sm bg-gray-50 rounded p-1 cursor-pointer transition-all duration-200 hover:shadow-md flex relative min-h-[32px]"
                  onClick={() => handleResponseClick(response.id)}
                >
                  <div className="pl-1 pt-[4px] leading-tight select-none text-black">
                    {response.text}
                    <span
                      className="float-right ml-2 mt-[2px] max-h-[24px] overflow-hidden"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!readonly && !isRevealed) {
                          handleResponseClick(response.id);
                        }
                      }}
                    >
                      <RankingBox responseId={response.id} type="user" />
                    </span>
                  </div>
                </div>

                {isRevealed && expertResponse && (
                  <div
                    className={`expert-rationale-container ${isRevealed ? 'revealed' : ''}`}
                    style={{ marginTop: '2px' }}
                  >
                    <div className="expert-rationale bg-lilac-400 rounded p-2 flex relative">
                      
                      <div className="flex-1 mr-2 pr-[28px]">
                        <p className="leading-tight select-none text-sm text-black">{expertResponse.expertRationale}</p>
                        
                        {expertResponse.expertMedia && (
                          <div className="mt-3">
                            <ExpertMedia media={expertResponse.expertMedia} />
                          </div>
                        )}
                        
                        {expertResponse.resources && expertResponse.resources.length > 0 && (
                          <div className="resources mt-3 pt-3 border-t border-gray-500/50">
                            <h5 className="text-xs font-semibold text-white mb-2">Resources:</h5>
                            <div className="space-y-1">
                              {expertResponse.resources.map((resource, idx) => (
                                <a
                                  key={idx}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-200 hover:text-blue-100 block transition-colors"
                                >
                                  📚 {resource.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex-shrink-0 absolute top-1 right-1">
                        <RankingBox responseId={response.id} type="expert" />
                      </div>
                    </div>
                  </div>
                )}

              </div>    

            );

          })}


          {isRevealed && (
            <div className={`score-container ${containerRight} mt-6 flex flex-col justify-end transition-all duration-500 delay-1000 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex justify-end">
                  <div className="score-box w-fit border border-gray-400 rounded px-1 py-1 bg-gray-200">
                    <div className="text-sm text-gray-800">{score}%</div>
                  </div>
                </div> 
              <div className="leading-tight overall-box rounded bg-lilac-400 p-3 select-none text-sm text-black leading-snug">{overall}</div>  
              <div className="leading-tight takeaway-box rounded bg-lilac-100 p-3 select-none text-sm text-black leading-snug shadow-sm mt-2 mb-6">{takeAway}</div>               
            </div>
          )}
        </div>
      </div>
    </>
  );
}