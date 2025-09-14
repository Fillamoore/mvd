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
    <div className="space-y-4 md:space-y-6">
      {/* Scenario Prompt - Medium light indigo grey */}
      <div className="bg-indigo-50 border-indigo-200 rounded-lg border p-4 md:p-6 text-left w-full"> 
        <div className="text-base md:text-lg font-medium text-indigo-900 leading-tight">
          {prompt}
        </div>
      </div>

      {/* Response Options - Very light indigo grey */}
      <div className="space-y-3 md:space-y-4">
        {responses.map((response) => (
          <div 
            key={response.id} 
            onClick={() => handleResponseClick(response.id)}
            className="relative bg-indigo-25 border-indigo-100 rounded-lg border p-4 md:p-6 pr-12 md:pr-16 
                       cursor-pointer transition-all duration-200 ease-in-out w-full
                       hover:shadow-md hover:border-indigo-200"
          >
            {/* Response Text */}
            <div className="text-sm md:text-base text-gray-800 leading-snug md:leading-normal"> 
              {response.text}
            </div>
            
            {/* Rating Box */}
            <div className="absolute bottom-2 right-2">
              <RatingBox 
                initialRating={ratingStates[response.id]?.value || null}
                readonly={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}