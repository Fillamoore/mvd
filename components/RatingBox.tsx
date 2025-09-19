'use client';

import { useState, useEffect } from 'react';
import { useLocalStore } from '../store/useLocalStore'; 

interface RatingBoxProps {
  moduleId: number;
  scenarioId: number;
  responseId: string;
  readonly?: boolean;
  borderColor?: string;
}

export default function RatingBox({ 
  moduleId,
  scenarioId, 
  responseId, 
  readonly = false, 
  borderColor = "border-lilac-300"
}: RatingBoxProps) {
  const { ratings, setRating } = useLocalStore();
  
  const scenarioKey = `${moduleId}-${scenarioId}`;
  const ratingValue = ratings[scenarioKey]?.[responseId]?.value ?? null;
  
  // LOCAL state for cycling direction - not persisted in store
  const [isIncreasing, setIsIncreasing] = useState<boolean>(true);
  const [previousValue, setPreviousValue] = useState<number | null>(null);

  // Determine direction when value changes
  useEffect(() => {
    if (ratingValue !== null && previousValue !== null && ratingValue !== previousValue) {
      setIsIncreasing(ratingValue > previousValue);
    }
    setPreviousValue(ratingValue);
  }, [ratingValue, previousValue]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!readonly) {
      let newValue: number | null;
      let newIsIncreasing: boolean = isIncreasing;

      // Restore the original cycling logic with direction
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

      // Update local direction state
      setIsIncreasing(newIsIncreasing);
      
      // Update store with new value
      setRating(moduleId, scenarioId, responseId, newValue);
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
        ${readonly ? 'cursor-default opacity-90' : 'cursor-pointer hover:opacity-90'}
      `}
      title={readonly ? 'Rating completed' : 'Click to cycle rating'}
    >
      <span className="text-base select-none">
        {ratingValue !== null ? ratingValue : ''}
      </span>
    </div>
  );
}