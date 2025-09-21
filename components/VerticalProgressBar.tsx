// components/VerticalProgressBar.tsx
import React from 'react';

interface VerticalProgressBarProps {
  current: number;
  total: number;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ current, total }) => {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;
  
  return (
    <div className="relative w-1.5 h-9 bg-gray-700 rounded-sm">
      <div 
        className="absolute bottom-0 w-full bg-lilac-500 rounded-[4px] transition-all duration-300 ease-in-out"
        style={{ height: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default VerticalProgressBar;