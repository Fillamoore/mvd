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

  const dynamicBg = `rgba(200, 160, 255, ${score / 100})`;

  return (
    <span
      title={`${Math.round(score)}%`}
      className="inline-block"
    >
      <div
        className={`w-[38px] h-[38px] rounded-[4px] border border-gray-500 mt-[1px] mb-[1px] ${bgClass}`}
        style={{ backgroundColor: dynamicBg }}
      />
    </span>
  );
};
