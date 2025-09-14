'use client';

import { useState } from 'react';
import RatingBox from './RatingBox';

interface ResponseOption {
  id: string;
  text: string;
}

interface ScenarioCardProps {
  prompt: string;
  responses: ResponseOption[];
  onRatingChange?: (responseId: string, rating: number | null) => void;
  userRatings?: { [key: string]: number | null };
}

interface RatingState {
  value: number | null;
  isIncreasing: boolean;
}

export default function ScenarioCard({ 
  prompt, 
  responses, 
  onRatingChange,
  userRatings = {}
}: ScenarioCardProps) {
  const [ratingStates, setRatingStates] = useState<{ [key: string]: RatingState }>(
    Object.fromEntries(
      responses.map(response => [
        response.id, 
        { 
          value: userRatings[response.id] || null, 
          isIncreasing: true 
        }
      ])
    )
  );

  const handleResponseClick = (responseId: string) => {
    const currentState = ratingStates[responseId];
    let newValue: number | null;
    let newIsIncreasing: boolean = currentState.isIncreasing;

    if (currentState.value === null) {
      newValue = 1;
      newIsIncreasing = true;
    } else {
      if (currentState.isIncreasing) {
        if (currentState.value < 5) {
          newValue = currentState.value + 1;
          newIsIncreasing = true;
        } else {
          newValue = 4;
          newIsIncreasing = false;
        }
      } else {
        if (currentState.value > 1) {
          newValue = currentState.value - 1;
          newIsIncreasing = false;
        } else {
          newValue = 2;
          newIsIncreasing = true;
        }
      }
    }

    const updatedStates = { 
      ...ratingStates, 
      [responseId]: { value: newValue, isIncreasing: newIsIncreasing } 
    };
    
    setRatingStates(updatedStates);
    onRatingChange?.(responseId, newValue);
  };

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      {/* Scenario Prompt - Left aligned */}
      <div className="bg-lilac-200 border-lilac-400 rounded-lg border p-4 md:p-6 text-left 
                     w-[90%] md:w-3/5 self-start ml-0 mr-auto">
        <div className="text-base md:text-lg font-medium text-gray-900 leading-tight">
          {prompt}
        </div>
      </div>

      {/* Response Options - Right aligned */}
      <div className="space-y-3 md:space-y-4 w-full">
        {responses.map((response) => (
          <div 
            key={response.id} 
            onClick={() => handleResponseClick(response.id)}
            className="relative bg-lilac-100 border-lilac-300 rounded-lg border p-4 md:p-6 pr-12 md:pr-16 
                       cursor-pointer transition-all duration-200 ease-in-out 
                       w-[90%] md:w-3/5 self-end ml-auto mr-0
                       hover:shadow-md hover:border-lilac-400"
          >
            {/* Response Text - Same font weight as scenario */}
            <div className="text-sm md:text-base text-gray-900 leading-snug md:leading-normal font-medium"> {/* Added font-medium */}
              {response.text}
            </div>
            
            {/* Rating Box */}
            <div className="absolute bottom-2 right-2">
              <RatingBox 
                initialRating={ratingStates[response.id]?.value || null}
                readonly={true}
                borderColor="border-lilac-300" // Pass border color to maintain consistency
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}