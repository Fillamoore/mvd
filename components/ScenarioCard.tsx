'use client';

import { useState, useEffect } from 'react';
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
    id: string;
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
  
  // Individual animation states for each expert rationale
  const [animateReveals, setAnimateReveals] = useState<boolean[]>([]);

  // Calculate score when revealed
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

  // Initialize and trigger reveal animations
  useEffect(() => {
    if (isRevealed) {
      setAnimateReveals(responses.map(() => true));
      
      const timers = responses.map((_, index) => 
        setTimeout(() => {
          setAnimateReveals(prev => prev.map((val, i) => i === index ? false : val));
        }, 300 * index)
      );
      
      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      setAnimateReveals(responses.map(() => false));
    }
  }, [isRevealed, responses.length]);

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      const currentValue = scenarioRatings[responseId]?.value ?? null;
      let newValue: number | null;

      if (currentValue === null) {
        newValue = 1;
      } else {
        if (currentValue < 5) {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1;
        }
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
    <div className="scenario-card bg-white rounded-lg shadow-md p-6">
      {/* Prompt Card - Left justified */}
      <div className="prompt-card bg-lilac-400 border border-gray-500 rounded-lg p-4 mb-6 text-left max-w-[60%]">
        <h3 className="text-lg font-semibold text-white">{prompt}</h3>
      </div>
      
      {/* Responses Container - Right justified content */}
      <div className="responses-container space-y-4 ml-auto max-w-[60%]">
        {responses.map((response, index) => {
          const expertResponse = expertRationales?.find(r => r.id === response.id);
          const userRating = scenarioRatings[response.id]?.value || 0;
          const isAnimating = animateReveals[index];
          
          return (
            <div key={response.id} className="response-pair-container">
              
              {/* Response Card */}
              <div 
                className="response-card bg-gray-50 border border-gray-500 rounded-lg p-4 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => handleResponseClick(response.id)}
              >
                <div className="flex flex-col">
                  <p className="text-gray-800 font-medium flex-1 mb-2">{response.text}</p>
                  
                  <div className="flex justify-end">
                    <div 
                      className="flex-shrink-0"
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
                </div>
              </div>

              {/* Expert Rationale Card */}
              {isRevealed && expertResponse && (
                <div 
                  className={`expert-rationale-container overflow-hidden transition-all duration-500 ease-out ${
                    isAnimating 
                      ? 'max-h-0 opacity-0' 
                      : 'max-h-[500px] opacity-100'
                  }`}
                  style={{ marginTop: '-1px' }}
                >
                  <div className="expert-rationale bg-lilac-400 border border-t-0 border-gray-500 rounded-b-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-semibold text-white">Rationale</h4>
                      <div className={`
                        w-8 h-8 flex items-center justify-center 
                        border-2 border-gray-500 rounded-md font-bold text-xl
                        ${getRatingClass(expertResponse.expertRating)}
                        flex-shrink-0
                      `}>
                        {expertResponse.expertRating}
                      </div>
                    </div>
                    <p className="text-white text-sm mb-3">{expertResponse.expertRationale}</p>
                    
                    {expertResponse.expertMedia && (
                      <div className="mt-3">
                        <ExpertMedia media={expertResponse.expertMedia} />
                      </div>
                    )}
                    
                    {expertResponse.resources && expertResponse.resources.length > 0 && (
                      <div className="resources mt-3 pt-3 border-t border-gray-500/50">
                        <h5 className="text-xs font-semibold text-white mb-2">Resources:</h5>
                        <div className="space-y-1">
                          {expertResponse.resources.map((resource, index) => (
                            <a 
                              key={index} 
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
                </div>
              )}
            </div>
          );
        })}

        {/* Score Box - Right justified, natural width, fades in after animations */}
        {isRevealed && (
          <div className={`score-container mt-6 flex justify-end transition-all duration-500 delay-1000 ${
            animateReveals.some(anim => anim) ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className={`score-box border border-gray-500 rounded-lg px-4 py-3 text-center ${getScoreClass(score)}`}>
              <div className="text-2xl font-bold">{score}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}