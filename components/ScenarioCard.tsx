// components/ScenarioCard.tsx - PROPERLY TYPED
'use client';

import RatingBox from './RatingBox';
import ExpertMedia from './ExpertMedia';
import { useScenariosProgressLocalStore } from '../store/useScenariosProgressLocalStore';

interface ResponseOption {
  id: string;
  text: string;
}

interface ExpertMediaType {
  url: string;
  caption?: string;
  altText: string;
}

interface Resource {
  type: 'article' | 'video' | 'intranet' | 'policy';
  title: string;
  url: string;
  description: string;
}

interface ScenarioResponse {
  id: string;
  text: string;
  expertRationale: string;
  expertRating: number;
  expertMedia?: ExpertMediaType;
  resources?: Resource[];
}

interface ScenarioCardProps {
  scenarioId: string;
  prompt: string;
  responses: ResponseOption[];
  expertRationales?: ScenarioResponse[];
  readonly?: boolean;
  isRevealed?: boolean;
}

export default function ScenarioCard({ 
  scenarioId, 
  prompt, 
  responses, 
  expertRationales, 
  readonly = false,
  isRevealed = false
}: ScenarioCardProps) {
  const cycleRating = useScenariosProgressLocalStore((state) => state.cycleRating);
  const ratings = useScenariosProgressLocalStore((state) => state.ratings[scenarioId] || {});
  
  const handleResponseClick = (responseId: string) => {
    if (!readonly && !isRevealed) {
      cycleRating(scenarioId, responseId);
    }
  };

  const getRatingColor = (rating: number) => {
    switch (rating) {
      case 1: return 'bg-red-500 text-white';
      case 2: return 'bg-orange-500 text-white';
      case 3: return 'bg-yellow-500 text-white';
      case 4: return 'bg-green-500 text-white';
      case 5: return 'bg-green-600 text-white';
      default: return 'bg-gray-300 text-gray-600';
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
          const userRating = ratings[response.id]?.value || 0;
          
          return (
            <div key={response.id} className="response-container">
              <div 
                className="response-card bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md"
                onClick={() => handleResponseClick(response.id)}
              >
                <div className="flex justify-between items-start">
                  <p className="text-gray-800 font-medium flex-1 mr-4">{response.text}</p>
                  
                  {!isRevealed && (
                    <div 
                      className="flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!readonly) {
                          cycleRating(scenarioId, response.id);
                        }
                      }}
                    >
                      <RatingBox 
                        scenarioId={scenarioId}
                        responseId={response.id}
                        readonly={readonly}
                      />
                    </div>
                  )}
                  
                  {isRevealed && expertResponse && (
                    <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${getRatingColor(expertResponse.expertRating)}`}>
                      {expertResponse.expertRating}
                    </div>
                  )}
                </div>
              </div>

              {isRevealed && expertResponse && (
                <div className="expert-rationale-container">
                  <div className="expert-rationale bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-2 shadow-sm">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-sm font-semibold text-yellow-800">Expert Rationale</h4>
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${getRatingColor(expertResponse.expertRating)}`}>
                        {expertResponse.expertRating}
                      </span>
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