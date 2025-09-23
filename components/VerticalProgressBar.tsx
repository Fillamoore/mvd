'use client';

import { useState, useEffect } from 'react';

interface VerticalProgressBarProps {
  current: number;
  total: number;
}

export default function VerticalProgressBar({ current, total }: VerticalProgressBarProps) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const progressPercentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="relative w-1.5 h-9 bg-gray-700 rounded-sm">
      {hydrated && (
        <div
          className="absolute bottom-0 w-full bg-lilac-300 rounded-[4px] transition-all duration-300 ease-in-out"
          style={{ height: `${progressPercentage}%` }}
        />
      )}
    </div>
  );
}
