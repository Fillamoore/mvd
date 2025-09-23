'use client';

interface RatingBoxProps {
  ratingValue: number | null | undefined;
}

export default function RatingBox({
  ratingValue,
}: RatingBoxProps) {
  
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
      title={'Rating completed'}
    >
      <span className="text-base select-none">
        {ratingValue !== null && ratingValue !== undefined ? ratingValue : ''}
      </span>
    </div>
  );
}