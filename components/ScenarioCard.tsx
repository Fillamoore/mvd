// components/ScenarioCard.tsx - COMPLETE UPDATED VERSION
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import RatingBox from './RatingBox';
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
    expertRating: number;
    expertMedia?: ExpertMediaType;
    resources?: Resource[];
  }>;
  readonly?: boolean;
}

const EMPTY_USER_RATINGS: { [key: string]: number | null } = {};
const EMPTY_RATING_DIRECTIONS: { [key: string]: boolean } = {};

export default function ScenarioCard({
  scenarioId,
  moduleId,
  totalScenarios,
  prompt,
  responses,
  expertRationales,
  readonly = false,
}: ScenarioCardProps) {

  const [isHydrated, setIsHydrated] = useState(false);
  const [isModuleComplete, setIsModuleComplete] = useState(false);

  // Get store state and actions
  const { 
    userRatings, 
    userRatingDirections, 
    isRevealed,
    currentScenario,
    shouldComplete // ADDED: Completion trigger flag
  } = useLocalStore(useShallow((state) => {
    const currentScenario = state.pickUpAndPutDown[moduleId.toString()]?.currentScenario;
    return {
      userRatings: (currentScenario?.userRatings || EMPTY_USER_RATINGS) as { [key: string]: number | null },
      userRatingDirections: (currentScenario?.userRatingDirections || EMPTY_RATING_DIRECTIONS) as { [key: string]: boolean },
      isRevealed: currentScenario?.isRevealed || false,
      currentScenario: currentScenario,
      shouldComplete: currentScenario?.shouldComplete || false // ADDED
    };
  }));

  const { 
    rateScenario, 
    revealScenario, 
    setExpertRatings, // This should be available here
    completeCurrentScenario,
    setNextScenario 
  } = useLocalStore();

  const isLastScenario = scenarioId === totalScenarios;

  const calculateScore = useMemo(() => {
    if (!expertRationales) return 0;
    let totalDifference = 0;
    let ratedResponses = 0;
    responses.forEach(response => {
      const userRating = userRatings[response.id];
      const expertResponse = expertRationales.find(r => r.id === response.id);
      if (userRating !== null && userRating !== undefined && expertResponse) {
        totalDifference += Math.abs(userRating - expertResponse.expertRating);
        ratedResponses++;
      }
    });
    if (ratedResponses === 0) return 0;
    const averageDifference = totalDifference / ratedResponses;
    return Math.round(100 - (averageDifference / 4) * 100);
  }, [userRatings, expertRationales, responses]);

  const score = isRevealed ? calculateScore : 0;

  // ADDED: Handle scenario completion with useCallback to avoid recreating on every render
  const handleScenarioCompletion = useCallback(() => {
    if (!currentScenario || !expertRationales) return;

    // Calculate expert ratings map
    const expertRatingsMap: { [key: string]: number } = {};
    expertRationales.forEach(response => {
      expertRatingsMap[response.id] = response.expertRating;
    });

    // Create completed scenario record
    const completedScenario = {
      scenarioId: currentScenario.scenarioId,
      userRatings: { ...currentScenario.userRatings },
      expertRatings: expertRatingsMap,
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
      console.log('Scenario completion triggered');
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

  // In ScenarioCard.tsx - SET EXPERT RATINGS WHEN SCENARIO LOADS
  useEffect(() => {
    if (isHydrated && expertRationales) {
      const expertRatingsMap: { [key: string]: number } = {};
      expertRationales.forEach(response => {
        expertRatingsMap[response.id] = response.expertRating;
      });
      setExpertRatings(moduleId, scenarioId, expertRatingsMap);
    }
  }, [isHydrated, expertRationales, moduleId, scenarioId, setExpertRatings]);

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      const currentValue = userRatings[responseId] ?? null;
      const currentDirection = userRatingDirections[responseId] ?? true;
      let newValue: number | null;
      let newDirection: boolean = currentDirection;
      
      if (currentValue === null) {
        newValue = 1;
        newDirection = true;
      } else if (currentDirection) {
        if (currentValue < 5) {
          newValue = currentValue + 1;
        } else {
          newValue = 4;
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
      
      rateScenario(moduleId, scenarioId, responseId, newValue, newDirection);
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

  return (
    <>
      <div className="scenario-card scenario-fade-in">
        <div className="prompt-card bg-lilac-400 rounded p-2 mb-6 text-left max-w-[60%]">
          <h3 className="text-sm leading-tight select-none text-black">{prompt}</h3>
        </div>
        
        <div className="responses-container space-y-4 ml-auto max-w-[60%]">
          {responses.map((response) => {
            const expertResponse = expertRationales?.find(r => r.id === response.id);
            
            return (
              <div key={response.id} className="response-pair-container">
                
                <div
                  className="response-card text-sm bg-gray-50 rounded p-1 cursor-pointer transition-all duration-200 hover:shadow-md flex relative min-h-[32px]"
                  onClick={() => handleResponseClick(response.id)}
                >
                  <p className="response-text pl-1 pt-[4px] flex-1 mr-2 leading-tight select-none text-gray-800 pr-[28px]">{response.text}</p>
                  <div
                    className="flex-shrink-0 absolute bottom-1 right-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!readonly && !isRevealed) {
                        handleResponseClick(response.id);
                      }
                    }}
                  >
                    <RatingBox responseId={response.id} type="user" />
                  </div>
                </div>

                {isRevealed && expertResponse && (
                  <div
                    className={`expert-rationale-container ${isRevealed ? 'revealed' : ''}`}
                    style={{ marginTop: '2px' }}
                  >
                    <div className="expert-rationale bg-lilac-400 rounded p-2 flex relative">
                      
                      <div className="flex-1 mr-2 pr-[28px]">
                        <p className="leading-tight select-none text-sm">{expertResponse.expertRationale}</p>
                        
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
                        <RatingBox responseId={response.id} type="expert" />
                      </div>
                    </div>
                  </div>
                )}


              </div>
            );
          })}

          {isRevealed && (
            <div className={`score-container mt-6 flex justify-end transition-all duration-500 delay-1000 ${
              isRevealed ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="score-box border border-gray-400 rounded px-1 py-1 text-center bg-gray-200">
                <div className="text-sm">{score}%</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}