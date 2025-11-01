// components/ScenarioCard.tsx (SIMPLIFIED - NO HYDRATION COMPLEXITY)
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import RankingBox from './RankingBox';
import { useLocalStore } from '@/store/useLocalStore';
import { useShallow } from 'zustand/react/shallow';

interface ScenarioCardProps {
  scenarioId: number;
  moduleId: number;
  totalScenarios: number;
  title: string;
  prompt: string;
  responses: Array<{
    id: string;
    title: string;
    text: string;
  }>;
  expertRationales?: Array<{
    id: string;
    text: string;
    expertRationale: string;
    expertRanking: number;
  }>;
  takeAway: string;
  overall: string; 
  readonly?: boolean;
}

const EMPTY_USER_RANKINGS: { [key: string]: number | null } = {};
const EMPTY_RANKING_DIRECTIONS: { [key: string]: boolean } = {};

function getVaryWidth(textLength: number) {
  const vary = textLength % 40;
  const mobileOffset = Math.floor((vary / 40) * 10); 
  const desktopOffset = Math.floor((vary / 40) * 10); 
  return {
    mobile: 95,
    desktop: 70,
  };
}

export default function ScenarioCard({
  scenarioId,
  moduleId,
  totalScenarios,
  title,
  prompt,
  responses,
  expertRationales,
  overall,
  takeAway,
  readonly = false,
}: ScenarioCardProps) {

  const [isModuleComplete, setIsModuleComplete] = useState(false);


  const { pickUpAndPutDown } = useLocalStore();
  const currentScenario = pickUpAndPutDown[moduleId]?.currentScenario;
  const userRankings = currentScenario?.userRankings || EMPTY_USER_RANKINGS;
  const userRankingDirections = currentScenario?.userRankingDirections || EMPTY_RANKING_DIRECTIONS;
  const isRevealed = currentScenario?.isRevealed || false;
  const shouldComplete = currentScenario?.shouldComplete || false;

  const { rankScenario, setNextScenario, triggerScenarioCompletion } = useLocalStore();
  
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

  const handleScenarioCompletion = useCallback(() => {
   // console.log('SCENARIO CARD: handleScenarioCompletion called - moving to next scenario');
    
    if (isLastScenario) {
   //   console.log('SCENARIO CARD: Module completed!');
      setIsModuleComplete(true);
    } else {
      const nextScenarioId = scenarioId + 1;
   //   console.log('SCENARIO CARD: Moving to next scenario:', nextScenarioId);
      setNextScenario(nextScenarioId);
    }
  }, [isLastScenario, scenarioId, setNextScenario]);

  useEffect(() => {
  //  console.log('SCENARIO CARD: useEffect - shouldComplete:', shouldComplete);
    if (shouldComplete) {
  //    console.log('SCENARIO CARD: Triggering scenario completion (navigation)');
      handleScenarioCompletion();
    }
  }, [shouldComplete, handleScenarioCompletion]);

  const handleResponseClick = (responseId: string) => {
    
    if (!readonly && !isRevealed) {
      const currentValue = userRankings[responseId] ?? null;
      const currentDirection = userRankingDirections[responseId] ?? true;
      let newValue: number | null;
      let newDirection: boolean = currentDirection;
      
      if (currentValue === null) {
        newValue = 3;
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

  // Debug: Log current state
  {/*
  useEffect(() => {
    console.log('SCENARIO CARD: Current state - moduleId:', moduleId, 'scenarioId:', scenarioId, 'isRevealed:', isRevealed, 'shouldComplete:', shouldComplete);
  }, [moduleId, scenarioId, isRevealed, shouldComplete]);
  */}
    
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

  const { mobile, desktop } = getVaryWidth(prompt.length);
  const isMobile = window.innerWidth < 768; 
  const promptWidthStyle = {width: `${isMobile ? mobile : desktop}%`};
  const containerRight = isMobile ? 'p-1' : 'pr-40';
  const containerLeft = isMobile ? 'py-1 pl-2 pr-1' : 'pl-40';
  const summaryPadding = isMobile ? 'py-1 pl-2 pr-1' : 'px-40';

  return (
    <>
      <div className= {`scenario-card scenario-fade-in ${containerLeft}`}>

        <div
          className="prompt-card bg-lilac-400 rounded py-2 px-3 mb-4" 
          style={promptWidthStyle}
        >
          <div className = "pb-2 text-lg font-semibold leading-tight select-none text-gray-800">{scenarioId}. {title}</div>
          <div className = "mx-[-2px] text-lg font-semibold leading-tight select-none text-gray-700 border-b border-gray-500"></div>
          <h3 className="pt-2 text-sm leading-tight select-none text-black" >{prompt}</h3>
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
                    className="response-card text-sm bg-gray-50 rounded p-3 cursor-pointer transition-all duration-200 hover:shadow-md relative min-h-[32px] overflow-hidden"
                    onClick={() => handleResponseClick(response.id)}
                >
                    
                    <div className="flex flex-col">  
                        <div className="pb-2 text-base text-bold leading-tight select-none text-black">
                            {response.id}: {response.title}
                        </div>
                        <div className = "mx-[-2px] text-lg font-semibold leading-tight select-none text-gray-700 border-b border-gray-400"></div>

                        <div className="pt-2 leading-tight select-none text-black">
                            {response.text}
                        </div>
                    </div>
                    
                    <div className="absolute bottom-1 right-1 max-h-[24px]">  
                        <RankingBox responseId={response.id} type="user" />
                    </div>
                    
                </div>

                {isRevealed && expertResponse && (
                  <div
                    className={`expert-rationale-container ${isRevealed ? 'revealed' : ''}`}
                    style={{ marginTop: '2px' }}
                  >
                    <div className="expert-rationale bg-lilac-400 rounded p-3 flex relative">
                      
                      <div className="flex-1 mr-2 pr-[28px]">
                        <p className="leading-tight select-none text-sm text-black">{expertResponse.expertRationale}</p>                        
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
            <div className={`score-container ${summaryPadding} mt-6 flex flex-col justify-end transition-all duration-500 delay-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex justify-end">
                <div className="score-box w-fit border border-gray-400 rounded px-1 py-1 bg-gray-200">
                  <div className="text-sm text-gray-800">{score}%</div>
                </div>
              </div>
               
              <div className="overall-box rounded bg-lilac-400 p-3 select-none text-sm text-black leading-snug">{overall}</div>  
              <div className="takeaway-box rounded bg-lilac-100 p-3 select-none text-sm text-black leading-snug shadow-sm mt-2 mb-6">{takeAway}</div>               
            </div>
          )}
        </div>
      </div>
    </>
  );
}