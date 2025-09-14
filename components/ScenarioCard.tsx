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
  // Initialize state with proper direction tracking for each response
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
      // First click: start at 1, direction increasing
      newValue = 1;
      newIsIncreasing = true;
    } else {
      if (currentState.isIncreasing) {
        if (currentState.value < 5) {
          // Normal increment: 1→2, 2→3, etc.
          newValue = currentState.value + 1;
          newIsIncreasing = true;
        } else {
          // At max (5): start decreasing
          newValue = 4;
          newIsIncreasing = false;
        }
      } else {
        if (currentState.value > 1) {
          // Normal decrement: 4→3, 3→2, etc.
          newValue = currentState.value - 1;
          newIsIncreasing = false;
        } else {
          // At min (1): start increasing again
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
    <div className="space-y-6">
      {/* Scenario Prompt - Left justified in its own box */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 text-left">
        <div className="text-lg font-medium text-gray-900">
          {prompt}
        </div>
      </div>

      {/* Response Options */}
      <div className="space-y-4">
        {responses.map((response) => (
          <div 
            key={response.id} 
            onClick={() => handleResponseClick(response.id)}
            className="relative bg-white rounded-lg border border-gray-200 p-6 pr-16 
                       cursor-pointer transition-all duration-200 ease-in-out
                       hover:shadow-md hover:border-gray-300"
          >
            {/* Response Text - Left aligned */}
            <div className="text-gray-700">
              {response.text}
            </div>
            
            {/* Rating Box - Absolutely positioned in bottom-right corner */}
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