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
    <div
      title={`${current}/${total}`}
      className="relative w-[8px] h-[38px] bg-gray-600 rounded border border-gray-600"
    >
      {hydrated && progressPercentage > 0 && (
        <div
          className="absolute bottom-0 pb-[1px] w-full rounded bg-lilac-300"
          style={{ height: `${progressPercentage}%` }}
        />
      )}
    </div>
  );
}
