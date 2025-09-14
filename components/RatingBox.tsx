'use client';

import { useScenariosProgressLocalStore } from '@/store/useScenariosProgressLocalStore';

interface RatingBoxProps {
  scenarioId: string;
  responseId: string;
  readonly?: boolean;
  borderColor?: string;
}

export default function RatingBox({ 
  scenarioId,
  responseId, 
  readonly = false, 
  borderColor = "border-lilac-300"
}: RatingBoxProps) {
  // Get the rating value from the store
  const ratingValue = useScenariosProgressLocalStore((state) => 
    state.ratings[scenarioId]?.[responseId] ?? null
  );
  const cycleRating = useScenariosProgressLocalStore((state) => state.cycleRating);

  const handleClick = () => {
    if (!readonly) {
      cycleRating(scenarioId, responseId);
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
        w-8 h-8 flex items-center justify-center 
        border-2 rounded-md font-bold
        transition-colors duration-200 ease-in-out
        ${getBackgroundColor(ratingValue)}
        ${borderColor}
        shadow-none outline-none ring-0
        ${readonly ? '' : 'cursor-pointer hover:opacity-90'}
      `}
      title={readonly ? '' : 'Click to cycle rating'}
    >
      <span className="text-xl select-none">
        {ratingValue || ''}
      </span>
    </div>
  );
}