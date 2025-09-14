'use client';

import { useState, useEffect } from 'react';
import RatingBox from './RatingBox';
import ExpertMedia from './ExpertMedia';
import { useScenariosProgressLocalStore } from '../store/useScenariosProgressLocalStore';

interface ResponseOption {
  id: string;
  text: string;
}

interface ExpertRationale {
  id: string;
  expertRationale: string;
  expertRating: number;
  expertMedia?: {
    url: string;
    caption?: string;
    altText: string;
  };
}

interface ScenarioCardProps {
  scenarioId: string;
  prompt: string;
  responses: ResponseOption[];
  readonly?: boolean;
  expertRationales?: ExpertRationale[];
}

export default function ScenarioCard({ 
  scenarioId = 'default-scenario',
  prompt, 
  responses, 
  readonly = false,
  expertRationales
}: ScenarioCardProps) {
  const cycleRating = useScenariosProgressLocalStore((state) => state.cycleRating);
  const [showExpertRationales, setShowExpertRationales] = useState(false);

  useEffect(() => {
    if (expertRationales) {
      setShowExpertRationales(true);
    }
  }, [expertRationales]);

  const handleResponseClick = (responseId: string) => {
    if (!readonly && !expertRationales) {
      cycleRating(scenarioId, responseId);
    }
  };

  const getExpertRatingColor = (rating: number) => {
    switch (rating) {
      case 1: return 'bg-red-100 text-red-700';
      case 2: return 'bg-orange-100 text-orange-700';
      case 3: return 'bg-yellow-100 text-yellow-700';
      case 4: return 'bg-green-100 text-green-700';
      case 5: return 'bg-green-200 text-green-800';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      {/* Scenario Prompt - Left aligned */}
      <div className="bg-lilac-200 border-lilac-400 rounded-lg border p-4 md:p-6 text-left 
                     max-w-[90%] md:max-w-[80%] lg:max-w-[60%] self-start">
        <div className="text-base md:text-lg font-medium text-gray-900 leading-tight">
          {prompt}
        </div>
      </div>

      {/* Response Options with spacing */}
      <div className="space-y-5 w-full">
        {responses.map((response) => {
          const expertRationale = expertRationales?.find(r => r.id === response.id);
          const isRevealed = !!expertRationales; // Check if ANY rationale exists (reveal happened)
          
          return (
            <div key={response.id} className="w-full">
              {/* Response Card */}
              <div 
                onClick={() => handleResponseClick(response.id)}
                className={`relative bg-lilac-100 border-lilac-300 rounded-lg border p-4 md:p-6 pr-12 md:pr-16 
                           transition-all duration-200 ease-in-out 
                           max-w-[90%] md:max-w-[80%] lg:max-w-[60%] self-end ml-auto
                           ${isRevealed ? '' : 'cursor-pointer hover:shadow-md hover:border-lilac-400'}`}
              >
                {/* Response Text */}
                <div className="text-sm md:text-base text-gray-900 leading-snug md:leading-normal font-medium">
                  {response.text}
                </div>
                
                {/* Rating Box */}
                <div className="absolute bottom-2 right-2">
                  <RatingBox 
                    scenarioId={scenarioId}
                    responseId={response.id}
                    readonly={readonly || isRevealed}
                    borderColor="border-lilac-300"
                  />
                </div>
              </div>

              {/* Expert Rationale Card - Dynamic height, animated */}
              {expertRationale && showExpertRationales && (
                <div className="relative bg-lilac-200 border-lilac-300 border-t-0 rounded-b-lg border p-4 md:p-6 pr-12 md:pr-16 
                               concertina-enter expert-rationale
                               max-w-[90%] md:max-w-[80%] lg:max-w-[60%] self-end ml-auto
                               mt-0"
                >
                  {/* Expert Rationale Text */}
                  <div className="text-sm md:text-base text-gray-700 leading-snug md:leading-normal mb-4">
                    {expertRationale.expertRationale}
                  </div>

                  {/* Expert Media - The "WOW" feature */}
                  {expertRationale.expertMedia && (
                    <ExpertMedia media={expertRationale.expertMedia} />
                  )}
                  
                  {/* Expert Rating Box - Top right corner */}
                  <div className="absolute top-2 right-2">
                    <div className={`
                      w-8 h-8 flex items-center justify-center 
                      border-2 border-lilac-300 rounded-md font-bold
                      ${getExpertRatingColor(expertRationale.expertRating)}
                    `}>
                      <span className="text-xl select-none">
                        {expertRationale.expertRating}
                      </span>
                    </div>
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