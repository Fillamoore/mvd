'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLocalStore } from '../store/useLocalStore';
import type { PickUpAndPutDownStore } from '../store/useLocalStore';
import { useShallow } from 'zustand/react/shallow';
import Image from 'next/image';

interface RatingBoxProps {
  moduleId: number;
  scenarioId: number;
  responseId: string;
  readonly?: boolean;
  borderColor?: string;
}

// Selectors now correctly take the moduleId from the component's props.
const userRatingsSelector = (state: PickUpAndPutDownStore, moduleId: number) => {
  return state.pickUpAndPutDown[moduleId.toString()]?.currentScenario?.userRatings || {};
};
const rateScenarioSelector = (state: PickUpAndPutDownStore) => state.rateScenario;
const isRevealedSelector = (state: PickUpAndPutDownStore, moduleId: number) => {
  return state.pickUpAndPutDown[moduleId.toString()]?.currentScenario?.isRevealed || false;
};

export default function RatingBox({ 
  moduleId,
  scenarioId, 
  responseId, 
  readonly = false, 
  borderColor = "border-lilac-300"
}: RatingBoxProps) {
  

  const rating = useLocalStore(state => 
    state.pickUpAndPutDown[moduleId.toString()]?.currentScenario?.userRatings?.[responseId]
  );
  
  // ADD THIS DEBUG:
  console.log('🎯 RatingBox render:', {
    moduleId,
    scenarioId,
    responseId,
    rating,
    time: performance.now()
  });

  console.log('🎯 RatingBox debug:', {
    moduleId,
    scenarioId, 
    responseId,
    ratingFromStore: rating,
    readonly
  });

  // Use useShallow to correctly subscribe to changes in the object.
  const userRatings = useLocalStore(useShallow((state) => userRatingsSelector(state, moduleId)));
  
  const rateScenario = useLocalStore(rateScenarioSelector);
  
  // Use useShallow to correctly subscribe to changes in the boolean value.
  const isRevealed = useLocalStore(useShallow((state) => isRevealedSelector(state, moduleId)));

  const ratingValue = userRatings[responseId] ?? null;

  const [isIncreasing, setIsIncreasing] = useState<boolean>(true);
  const [previousValue, setPreviousValue] = useState<number | null>(null);

  useEffect(() => {
    if (ratingValue !== null && previousValue !== null && ratingValue !== previousValue) {
      setIsIncreasing(ratingValue > previousValue);
    }
    setPreviousValue(ratingValue);
  }, [ratingValue, previousValue]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!readonly && !isRevealed) {
      let newValue: number | null;
      let newIsIncreasing: boolean = isIncreasing;

      if (ratingValue === null) {
        newValue = 1;
        newIsIncreasing = true;
      } else {
        if (isIncreasing) {
          if (ratingValue < 5) {
            newValue = ratingValue + 1;
            newIsIncreasing = true;
          } else {
            newValue = 4;
            newIsIncreasing = false;
          }
        } else {
          if (ratingValue > 1) {
            newValue = ratingValue - 1;
            newIsIncreasing = false;
          } else {
            newValue = 2;
            newIsIncreasing = true;
          }
        }
      }

      setIsIncreasing(newIsIncreasing);
      rateScenario(moduleId, scenarioId, responseId, newValue);
    }
  };

  const getBackgroundColor = (rating: number | null) => {
    if (rating === null) return 'bg-gray-100 text-gray-400';
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
    <div 
      onClick={handleClick}
      className={`
        w-6 h-6 flex items-center justify-center 
        border-1 border-gray-400 rounded font-bold
        transition-colors duration-200 ease-in-out
        ${getBackgroundColor(ratingValue)}
        ${borderColor}
        shadow-none outline-none ring-0
        ${(readonly || isRevealed) ? 'cursor-default opacity-90' : 'cursor-pointer hover:opacity-90'}
      `}
      title={(readonly || isRevealed) ? 'Rating completed' : 'Click to cycle rating'}
    >
      <span className="text-base select-none">
        {ratingValue !== null ? ratingValue : ''}
      </span>
    </div>
  );
}