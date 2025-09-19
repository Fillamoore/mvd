'use client';

import { useState, useEffect, useRef } from 'react';
import RatingBox from './RatingBox';
import ExpertMedia from './ExpertMedia';
import { useLocalStore } from '../store/useLocalStore';
import type { ExpertMedia as ExpertMediaType, Resource } from '@/data/scenarios';

interface ScenarioCardProps {
  scenarioId: number;
  moduleId: number;
  prompt: string;
  responses: Array<{
    id: string;
    text: string;
  }>;
  expertRationales?: Array<{
    id:string;
    text: string;
    expertRationale: string;
    expertRating: number;
    expertMedia?: ExpertMediaType;
    resources?: Resource[];
  }>;
  readonly?: boolean;
  isRevealed?: boolean;
}

export default function ScenarioCard({ 
  scenarioId, 
  moduleId, 
  prompt, 
  responses, 
  expertRationales, 
  readonly = false,
  isRevealed = false
}: ScenarioCardProps) {
  const { ratings } = useLocalStore();
  
  const scenarioKey = `${moduleId}-${scenarioId}`;
  const scenarioRatings = ratings[scenarioKey] || {};
  
  // Use a single boolean to control the simultaneous animation
  const [animateReveal, setAnimateReveal] = useState<boolean>(false);

  const calculateScore = () => {
    if (!expertRationales) return 0;
    let totalDifference = 0;
    let ratedResponses = 0;
    responses.forEach(response => {
      const userRating = scenarioRatings[response.id]?.value;
      const expertResponse = expertRationales.find(r => r.id === response.id);
      if (userRating !== null && userRating !== undefined && expertResponse) {
        totalDifference += Math.abs(userRating - expertResponse.expertRating);
        ratedResponses++;
      }
    });
    if (ratedResponses === 0) return 0;
    const averageDifference = totalDifference / ratedResponses;
    return Math.round(100 - (averageDifference / 4) * 100);
  };

  const score = isRevealed ? calculateScore() : 0;

  useEffect(() => {
    // If revealed, start the animation after a small delay to ensure all elements are rendered
    if (isRevealed) {
      const timer = setTimeout(() => {
        setAnimateReveal(true);
      }, 50); // A short delay for proper rendering
      return () => clearTimeout(timer);
    } else {
      setAnimateReveal(false);
    }
  }, [isRevealed]);

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      const currentValue = scenarioRatings[responseId]?.value ?? null;
      let newValue: number | null;
      if (currentValue === null) {
        newValue = 1;
      } else {
        newValue = currentValue < 5 ? currentValue + 1 : currentValue - 1;
      }
      const { setRating } = useLocalStore.getState();
      setRating(moduleId, scenarioId, responseId, newValue);
    }
  };

  const getRatingClass = (rating: number): string => {
    switch (rating) {
      case 1: return 'bg-red-100 text-red-700';
      case 2: return 'bg-orange-100 text-orange-700';
      case 3: return 'bg-yellow-100 text-yellow-700';
      case 4: return 'bg-green-100 text-green-700';
      case 5: return 'bg-green-200 text-green-800';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  const getScoreClass = (score: number): string => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 75) return 'bg-green-50 text-green-700';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    if (score >= 40) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="scenario-card">
      <div className="prompt-card bg-lilac-400 rounded p-2 mb-6 text-left max-w-[60%]">
        <h3 className="text-sm leading-tight select-none text-black">{prompt}</h3>
      </div>
      
      <div className="responses-container space-y-4 ml-auto max-w-[60%]">
        {responses.map((response, index) => {
          const expertResponse = expertRationales?.find(r => r.id === response.id);
          
          return (
            <div key={response.id} className="response-pair-container">
              
              {/* == RESPONSE CARD: RatingBox is BOTTOM-RIGHT == */}
              <div 
                className="response-card text-sm bg-gray-50 rounded p-1 cursor-pointer transition-all duration-200 hover:shadow-md flex relative min-h-[32px]"
                onClick={() => handleResponseClick(response.id)}
              >
                {/* The main text content with right padding to prevent overlap */}
                <p className="response-text pl-1 flex-1 mr-2 leading-tight select-none text-gray-800 pr-[28px]">{response.text}</p>
                <div 
                  className="flex-shrink-0 absolute bottom-1 right-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!readonly && !isRevealed) {
                      handleResponseClick(response.id);
                    }
                  }}
                >
                  
                  <RatingBox 
                    moduleId={moduleId}
                    scenarioId={scenarioId}
                    responseId={response.id}
                    readonly={readonly || isRevealed}
                  />
                
                </div>
              </div>

              {/* == EXPERT RATIONALE CARD: Expert Rating is TOP-RIGHT == */}
              {isRevealed && expertResponse && (
                <div 
                  className={`expert-rationale-container overflow-hidden transition-all duration-500 ease-out ${
                    animateReveal ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ marginTop: '2px' }}
                >
                  <div className="expert-rationale bg-lilac-400 rounded p-2 flex relative">
                    
                    {/* Main content with right padding */}
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

                    {/* Expert's rating (positioned top-right) */}
                    <div className="flex-shrink-0 absolute top-1 right-1">
                      <div className={`
                        w-6 h-6 flex items-center justify-center 
                        border-1 border-gray-400 rounded font-bold text-base
                        ${getRatingClass(expertResponse.expertRating)}
                      `}>
                        {expertResponse.expertRating}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {isRevealed && (
          <div className={`score-container mt-6 flex justify-end transition-all duration-500 delay-1000 ${
            animateReveal ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="score-box border border-gray-400 rounded px-1 py-1 text-center bg-gray-200">
              <div className="text-sm">{score}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}