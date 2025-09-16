// components/ScenarioCard.tsx - FIXED VERSION
'use client';

import RatingBox from './RatingBox';
import ExpertMedia from './ExpertMedia';
import { useScenariosProgressLocalStore } from '../store/useScenariosProgressLocalStore';
import { getScenarioUniqueId } from '@/data/scenarios';
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
  const uniqueScenarioId = getScenarioUniqueId(moduleId, scenarioId);
  
  const cycleRating = useScenariosProgressLocalStore((state) => state.cycleRating);
  const allRatings = useScenariosProgressLocalStore((state) => state.ratings);
  const scenarioRatings = allRatings[uniqueScenarioId] || {};

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      cycleRating(uniqueScenarioId, responseId);
    }
  };

  // FIXED: Get the proper Tailwind classes for the rating (matching RatingBox component)
  const getRatingClass = (rating: number): string => {
    switch (rating) {
      case 1: return 'bg-red-100 text-red-700 border-red-300';
      case 2: return 'bg-orange-100 text-orange-700 border-orange-300';
      case 3: return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 4: return 'bg-green-100 text-green-700 border-green-300';
      case 5: return 'bg-green-200 text-green-800 border-green-400';
      default: return 'bg-gray-100 text-gray-400 border-gray-300';
    }
  };

  return (
    <div className="scenario-card bg-white rounded-lg shadow-md p-6">
      <div className="prompt-card bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
        <h3 className="text-lg font-semibold text-blue-900">{prompt}</h3>
      </div>
      
      <div className="responses-container space-y-4 ml-auto max-w-md">
        {responses.map((response) => {
          const expertResponse = expertRationales?.find(r => r.id === response.id);
          const userRating = scenarioRatings[response.id]?.value || 0;
          
          return (
            <div key={response.id} className="response-container">
              <div 
                className="response-card bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => handleResponseClick(response.id)}
              >
                <div className="flex flex-col"> {/* FIXED: Changed to flex-col */}
                  <p className="text-gray-800 font-medium flex-1 mb-4">{response.text}</p>
                  
                  <div className="flex justify-end"> {/* FIXED: Added container to align rating to bottom right */}
                    {!isRevealed && (
                      <div 
                        className="flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!readonly) {
                            cycleRating(uniqueScenarioId, response.id);
                          }
                        }}
                      >
                        <RatingBox 
                          scenarioId={uniqueScenarioId}
                          responseId={response.id}
                          readonly={readonly}
                        />
                      </div>
                    )}
                    
                    {isRevealed && expertResponse && (
                      // FIXED: Use exact same RatingBox styling and dimensions
                      <div className={`
                        w-8 h-8 flex items-center justify-center 
                        border-2 rounded-md font-bold text-xl
                        ${getRatingClass(expertResponse.expertRating)}
                        flex-shrink-0
                      `}>
                        {expertResponse.expertRating}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {isRevealed && expertResponse && (
                <div className="expert-rationale-container">
                  <div className="expert-rationale bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-2 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-semibold text-yellow-800">Expert Rationale</h4>
                      {/* FIXED: Use exact same RatingBox styling and dimensions as response cards */}
                      <div className={`
                        w-8 h-8 flex items-center justify-center 
                        border-2 rounded-md font-bold text-xl
                        ${getRatingClass(expertResponse.expertRating)}
                        flex-shrink-0
                      `}>
                        {expertResponse.expertRating}
                      </div>
                    </div>
                    <p className="text-yellow-700 text-sm mb-3">{expertResponse.expertRationale}</p>
                    
                    {expertResponse.expertMedia && (
                      <div className="mt-3">
                        <ExpertMedia media={expertResponse.expertMedia} />
                      </div>
                    )}
                    
                    {expertResponse.resources && expertResponse.resources.length > 0 && (
                      <div className="resources mt-3 pt-3 border-t border-yellow-200">
                        <h5 className="text-xs font-semibold text-yellow-800 mb-2">Additional Resources:</h5>
                        <div className="space-y-1">
                          {expertResponse.resources.map((resource, index) => (
                            <a 
                              key={index} 
                              href={resource.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 block transition-colors"
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
      </div>
    </div>
  );
}