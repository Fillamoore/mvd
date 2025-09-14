'use client';

interface RatingBoxProps {
  initialRating?: number | null;
  readonly?: boolean;
}

export default function RatingBox({ initialRating = null, readonly = false }: RatingBoxProps) {
  const getColor = (rating: number | null) => {
    if (rating === null) return 'bg-gray-100 border-gray-300 text-gray-400';
    switch (rating) {
      case 1: return 'bg-red-100 border-red-300 text-red-700';
      case 2: return 'bg-orange-100 border-orange-300 text-orange-700';
      case 3: return 'bg-yellow-100 border-yellow-300 text-yellow-700';
      case 4: return 'bg-green-100 border-green-300 text-green-700';
      case 5: return 'bg-green-200 border-green-400 text-green-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-400';
    }
  };

  return (
    <div 
      className={`
        w-8 h-8 flex items-center justify-center 
        border-2 rounded-md font-bold
        transition-colors duration-200 ease-in-out
        ${getColor(initialRating)}
        shadow-none outline-none ring-0
        ${readonly ? '' : 'cursor-pointer hover:opacity-90'}
      `}
      title={readonly ? '' : 'Click to cycle rating'}
    >
      <span className="text-xl select-none">
        {initialRating || ''}
      </span>
    </div>
  );
}