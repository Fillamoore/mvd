// components/RankingBox.tsx - UNIFIED VERSION
'use client';

import { useLocalStore } from '@/store/useLocalStore';

interface RankingBoxProps {
  responseId: string;
  type: 'user' | 'expert'; // Now handles both types
}

export default function RankingBox({ responseId, type }: RankingBoxProps) {
  // Each RankingBox subscribes ONLY to its specific ranking data
  const rankingValue = useLocalStore(state => {
    if (!state.currentModule) return null;
    
    const currentScenario = state.pickUpAndPutDown[state.currentModule]?.currentScenario;
    if (!currentScenario) return null;
    
    // Return the appropriate rating based on type
    return type === 'user' 
      ? currentScenario.userRankings?.[responseId] ?? null
      : currentScenario.expertRankings?.[responseId] ?? null;
  });

  const getBackgroundColor = (ranking: number | null | undefined) => {
    if (ranking === null || ranking === undefined) return 'bg-gray-100 text-gray-400';
    switch (ranking) {
      case 1: return 'bg-rating-gold';
      case 2: return 'bg-rating-silver';
      case 3: return 'bg-rating-bronze';
      //case 4: return 'bg-green-100 text-green-700';
      //case 5: return 'bg-green-200 text-green-800';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  return (
    <div
className={`
      w-4 h-4 flex items-center justify-center
      border-1 border-gray-500 rounded font-bold
      transition-colors duration-200 ease-in-out
      ${getBackgroundColor(rankingValue)}
      shadow-none outline-none ring-0
      ${type === 'user' ? 'cursor-pointer' : 'cursor-default'}
      opacity-90
    `}
    >
      
      <span className="text-base select-none">
      {/*
      {rankingValue !== null && rankingValue !== undefined ? rankingValue : ''}
      */}
      </span>
      
    </div>
  );
}