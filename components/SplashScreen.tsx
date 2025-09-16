// components/SplashScreen.tsx - FIXED VERSION
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { generateCorrectClockwiseSpiralOrder } from '@/utils/spiral';

const GRID_SIZE = 7;
const TOTAL_TILES = 49;
const ANIMATION_INTERVAL = 50; // ms between tile reveals

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'grid' | 'animating' | 'done'>('logo');
  const [visibleTiles, setVisibleTiles] = useState<number>(0);
  const [spiralOrder, setSpiralOrder] = useState<{ id: number; row: number; col: number }[]>([]);
  const [dotPosition, setDotPosition] = useState(0);

  useEffect(() => {
    setSpiralOrder(generateCorrectClockwiseSpiralOrder(GRID_SIZE));
  }, []);

  useEffect(() => {
    if (phase === 'logo') {
      const timer = setTimeout(() => setPhase('grid'), 1500);
      return () => clearTimeout(timer);
    }

    if (phase === 'grid') {
      const timer = setTimeout(() => setPhase('animating'), 1000);
      return () => clearTimeout(timer);
    }

    if (phase === 'animating') {
      const interval = setInterval(() => {
        setVisibleTiles(prev => {
          const next = prev + 1;
          if (next >= TOTAL_TILES) {
            clearInterval(interval);
            setTimeout(() => setPhase('done'), 500);
          }
          return next;
        });
        setDotPosition(prev => Math.min(prev + (100 / TOTAL_TILES), 100));
      }, ANIMATION_INTERVAL);
      return () => clearInterval(interval);
    }

    if (phase === 'done') {
      setTimeout(() => onComplete(), 800);
    }
  }, [phase, onComplete]);

  const renderGrid = () => {
    const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
    spiralOrder.forEach(({ id, row, col }, index) => {
      if (index < visibleTiles) {
        const score = 0.5 + Math.random() * 0.5;
        grid[row][col] = score;
      }
    });

    return (
      <div className="grid grid-cols-7 gap-1 mx-auto mt-6 fade-in scale-90 md:scale-100">
        {grid.map((row, rowIndex) =>
          row.map((score, colIndex) => {
            const isFinal = visibleTiles === TOTAL_TILES &&
              spiralOrder[visibleTiles - 1].row === rowIndex &&
              spiralOrder[visibleTiles - 1].col === colIndex;

            const backgroundColor = score
              ? `rgba(200, 160, 255, ${score})`
              : '#1a1a1a';

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-7 h-7 rounded-sm border border-gray-700 ${isFinal ? 'animate-pulse' : ''}`}
                style={{ backgroundColor }}
              />
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center h-screen bg-black text-white z-50">
      {phase === 'logo' && (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/aalogo.png"
            alt="App Logo"
            width={120}
            height={120}
            className="fade-in md:w-[120px] md:h-[120px] w-[80px] h-[80px]"
            priority
          />
        </div>
      )}

      {(phase === 'grid' || phase === 'animating' || phase === 'done') && (
        <>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white mb-2">Advisory Accelerator</h1>
            <p className="text-gray-300">Loading your learning experience</p>
          </div>
          
          {renderGrid()}
          
          <div className="w-full max-w-xs md:max-w-md h-1.5 bg-gray-700 rounded-full relative mt-6 fade-in">
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow transition-all duration-75"
              style={{ left: `${dotPosition}%`, marginLeft: '-8px' }}
            />
          </div>
        </>
      )}
    </div>
  );
}