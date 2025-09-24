// components/RatingBox.tsx - UNIFIED VERSION
'use client';

import { useLocalStore } from '@/store/useLocalStore';

interface RatingBoxProps {
  responseId: string;
  type: 'user' | 'expert'; // Now handles both types
}

export default function RatingBox({ responseId, type }: RatingBoxProps) {
  // Each RatingBox subscribes ONLY to its specific rating data
  const ratingValue = useLocalStore(state => {
    if (!state.currentModule) return null;
    
    const currentScenario = state.pickUpAndPutDown[state.currentModule]?.currentScenario;
    if (!currentScenario) return null;
    
    // Return the appropriate rating based on type
    return type === 'user' 
      ? currentScenario.userRatings?.[responseId] ?? null
      : currentScenario.expertRatings?.[responseId] ?? null;
  });

  const getBackgroundColor = (rating: number | null | undefined) => {
    if (rating === null || rating === undefined) return 'bg-gray-100 text-gray-400';
    switch (rating) {
      case 1: return 'bg-red-100 text-red-700';
      case 2: return 'bg-orange-100 text-orange-700';
      case 3: return 'bg-yellow-100 text-yellow-700';
      case 4: return 'bg-green-100 text-green-700';
      case 5: return 'bg-green-200 text-green-800';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  const getTitle = () => {
    if (ratingValue === null || ratingValue === undefined) {
      return type === 'user' ? 'Not rated' : 'Expert rating';
    }
    return type === 'user' ? 'Your rating' : 'Expert rating';
  };

  return (
    <div
      className={`
        w-6 h-6 flex items-center justify-center
        border-1 border-gray-400 rounded font-bold
        transition-colors duration-200 ease-in-out
        ${getBackgroundColor(ratingValue)}
        shadow-none outline-none ring-0
        cursor-default opacity-90
      `}
      title={getTitle()}
    >
      <span className="text-base select-none">
        {ratingValue !== null && ratingValue !== undefined ? ratingValue : ''}
      </span>
    </div>
  );
}