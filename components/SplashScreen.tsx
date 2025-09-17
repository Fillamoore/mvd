'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { generateCorrectClockwiseSpiralOrder } from '@/utils/spiral';

const GRID_SIZE = 7;
const TOTAL_TILES = 49;
const ANIMATION_INTERVAL = 50;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'grid' | 'animating' | 'done'>('logo');
  const [visibleTiles, setVisibleTiles] = useState(0);
  const [spiralOrder, setSpiralOrder] = useState<{ id: number; row: number; col: number }[]>([]);
  const [tileScores, setTileScores] = useState<number[][]>([]);
  const [dotPosition, setDotPosition] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentTileRef = useRef<number>(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const order = generateCorrectClockwiseSpiralOrder(GRID_SIZE);
    setSpiralOrder(order);

    const scores = Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null)
    );
    order.forEach(({ row, col }) => {
      scores[row][col] = 0.3 + Math.random() * 0.7;
    });
    setTileScores(scores);

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    switch (phase) {
      case 'logo':
        setTimeout(() => isMountedRef.current && setPhase('grid'), 800);
        break;

      case 'grid':
        setTimeout(() => isMountedRef.current && setPhase('animating'), 800);
        break;

      case 'animating':
        startTileAnimation();
        break;

      case 'done':
        setTimeout(() => isMountedRef.current && onComplete(), 2000);
        break;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase]);

  useEffect(() => {
    if (visibleTiles === TOTAL_TILES && phase === 'animating') {
      setTimeout(() => {
        if (isMountedRef.current) setPhase('done');
      }, ANIMATION_INTERVAL);
    }
  }, [visibleTiles, phase]);

  const startTileAnimation = () => {
    currentTileRef.current = 0;
    setVisibleTiles(0);
    setDotPosition(0);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const next = currentTileRef.current + 1;

      if (next <= TOTAL_TILES) {
        currentTileRef.current = next;
        setVisibleTiles(next);
        setDotPosition(Math.min(next * (100 / TOTAL_TILES), 100));
      }

      if (next >= TOTAL_TILES) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, ANIMATION_INTERVAL);
  };

  const renderGrid = () => {
    if (!spiralOrder.length || !tileScores.length) return null;

    const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));
    spiralOrder.forEach(({ row, col }, index) => {
      if (index < visibleTiles) {
        grid[row][col] = tileScores[row][col];
      }
    });

    return (
      <div className="grid grid-cols-7 gap-2 mx-auto mt-2">
        {grid.map((row, rowIndex) =>
          row.map((score, colIndex) => {
            const isFinal = visibleTiles === TOTAL_TILES &&
              spiralOrder[visibleTiles - 1]?.row === rowIndex &&
              spiralOrder[visibleTiles - 1]?.col === colIndex;

            const backgroundColor = score
              ? `rgba(200, 160, 255, ${score})`
              : '#1a1a1a';

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-14 h-14 border border-gray-700 ${
                  isFinal ? 'animate-once-pulse' : ''
                }`}
                style={{
                  backgroundColor,
                  borderRadius: '8px',
                }}
              />
            );
          })
        )}
      </div>
    );
  };

  const renderProgressBar = () => {
    const isFinalDot = visibleTiles === TOTAL_TILES;

    return (
      <div className="w-full max-w-xs md:max-w-md h-1.5 bg-gray-800 rounded-full relative mt-6">
        <div
          className={`absolute w-4 h-4 bg-gray-700 rounded-full border border-white shadow transition-all duration-75 ${
            isFinalDot ? 'animate-once-pulse' : ''
          }`}
          style={{
            left: `${dotPosition}%`,
            top: 'calc(50% - 8px)',
            marginLeft: '-8px',
          }}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center h-screen bg-black text-white z-50">
      <div className={`flex flex-col items-center scale-[0.8] ${phase === 'logo' ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}>
        <Image
          src="/aalogo.png"
          alt="App Logo"
          width={440}
          height={140}
          priority
        />

        <div className="mt-2 flex flex-col items-center min-h-[360px]">
          {renderGrid()}
          {renderProgressBar()}
        </div>
      </div>
    </div>
  );
}
