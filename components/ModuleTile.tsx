// components/ModuleTile.tsx
import React from 'react';

interface ModuleTileProps {
  moduleId: number;
  score?: number;
}

export const ModuleTile = ({ moduleId, score = 0 }: ModuleTileProps) => {
  const hasProgress = score > 0;

  let bgClass = '';
  if (moduleId <= 9) {
    bgClass = 'bg-lilac-charcoal-f';
  } else if (moduleId <= 25) {
    bgClass = 'bg-lilac-charcoal-i';
  } else {
    bgClass = 'bg-lilac-charcoal-a';
  }

  const dynamicBg = hasProgress
    ? `rgba(200, 160, 255, ${score / 100})`
    : undefined;

  return (
    <div
      className={`w-9 h-9 rounded-[4px] border-1 border-gray-500 ${bgClass}`}
      style={{
        backgroundColor: dynamicBg,
      }}
    />
  );
};