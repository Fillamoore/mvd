// components/SplashScreen.tsx
'use client';

import React from 'react'; 
import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { generateCorrectClockwiseSpiralOrder } from '@/utils/spiral';

const GRID_SIZE = 7;
const TOTAL_TILES = 49;
const ANIMATION_INTERVAL = 50; 

interface SplashScreenProps {
  onComplete?: () => void;
}

type SplashPhase = 'logo' | 'grid' | 'animating' | 'done';

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<SplashPhase>('logo');
  const [visibleTiles, setVisibleTiles] = useState(TOTAL_TILES);
  const [spiralOrder, setSpiralOrder] = useState<{ id: number; row: number; col: number }[]>([]);
  const [tileScores, setTileScores] = useState<number[][]>([]);
  const [animatedTiles, setAnimatedTiles] = useState<Set<number>>(new Set());
  const [dotPosition, setDotPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentTileRef = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

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
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const startTileAnimation = useCallback(() => {
    currentTileRef.current = 0;
    setVisibleTiles(0);
    setDotPosition(0);
    setAnimatedTiles(new Set());

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const next = currentTileRef.current + 1;

      if (next <= TOTAL_TILES) {
        currentTileRef.current = next;
        setVisibleTiles(next);
        setDotPosition(Math.min(next * (100 / TOTAL_TILES), 100));
        setAnimatedTiles((prev) => new Set(prev).add(next - 1));
      }

      if (next >= TOTAL_TILES) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        // Animation complete - call onComplete directly
        setTimeout(() => {
          onComplete?.();
        }, 700);
      }
    }, ANIMATION_INTERVAL);
  }, [onComplete]);

  // Main phase transition logic
  useEffect(() => {
    switch (phase) {
      case 'logo':
        const logoTimeout = setTimeout(() => {
          setPhase('grid');
        }, 700);
        return () => clearTimeout(logoTimeout);

      case 'grid':
        setVisibleTiles(TOTAL_TILES);
        const gridTimeout = setTimeout(() => {
          setVisibleTiles(0);
          setAnimatedTiles(new Set());
          setPhase('animating');
        }, 700);
        return () => clearTimeout(gridTimeout);

      case 'animating':
        startTileAnimation();
        break;

      case 'done':
        // Directly call onComplete for the done phase
        setTimeout(() => {
          onComplete?.();
        }, 700);
        break;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [phase, onComplete, startTileAnimation]);

  const renderGrid = useCallback(() => {
    if (!spiralOrder.length || !tileScores.length) return null;

    const spiralMap = new Map<string, { index: number; id: number }>();
    spiralOrder.forEach(({ row, col, id }, index) => {
      spiralMap.set(`${row},${col}`, { index, id });
    });

    const tileSize = isMobile ? 'w-8 h-8' : 'w-10 h-10';
    const gridGap = isMobile ? 'gap-1' : 'gap-[5px]';
    const roundSize = isMobile ? 'rounded-[3px]' : 'rounded-[4px]';
    return (
      <div className={`grid grid-cols-7 ${gridGap} mx-auto mt-2`}>
        {Array(GRID_SIZE).fill(null).map((_, rowIndex) =>
          Array(GRID_SIZE).fill(null).map((_, colIndex) => {
            const key = `${rowIndex},${colIndex}`;
            const spiralEntry = spiralMap.get(key);
            const score = tileScores[rowIndex][colIndex];

            if (!spiralEntry) {
              return (
                <div
                  key={key}
                  className={`${tileSize} bg-black`}
                />
              );
            }

            const { id, index } = spiralEntry;
            const isVisible = phase === 'grid' || animatedTiles.has(index);
            const isFinal = animatedTiles.has(TOTAL_TILES - 1) && index === TOTAL_TILES - 1;

            let bgClass = '';
            if (id <= 9) bgClass = 'bg-lilac-charcoal-f';
            else if (id <= 25) bgClass = 'bg-lilac-charcoal-i';
            else bgClass = 'bg-lilac-charcoal-a';

            const dynamicBg = isVisible && phase !== 'grid'
              ? `rgba(200, 160, 255, ${score})`
              : undefined;

            return (
              <div
                key={key}
                className={`${tileSize} ${roundSize} ${isFinal ? 'animate-once-pulse' : ''} ${!dynamicBg ? bgClass : ''}`}
                style={dynamicBg ? { backgroundColor: dynamicBg } : undefined}
              />
            );
          })
        )}
      </div>
    );
  }, [spiralOrder, tileScores, phase, animatedTiles, isMobile]);

  const renderProgressBar = useCallback(() => {
    const isFinalDot = animatedTiles.has(TOTAL_TILES - 1);
    const barWidth = isMobile ? 'max-w-[360px]' : 'max-w-xs md:max-w-md';

    return (
      <div className={`w-full ${barWidth} h-1.5 bg-gray-800 rounded-full relative mt-6`}>
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
  }, [animatedTiles, isMobile, dotPosition]);

  return (
    <div className={`fixed inset-0 flex flex-col ${isMobile ? 'mt-10' : 'mt-12'} justify-start h-screen text-white z-50 bg-black`}>
      <div className={`flex flex-col items-center ${phase === 'logo' ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}>
          <img
            src="/qikr-logo.png"
            alt="qikr logo"
            className={isMobile ? 'w-[110px] h-auto' : 'w-[135px] h-auto'}
          />
        <div className={`mt-2 flex flex-col items-center `}>
          {renderGrid()}
          {renderProgressBar()}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SplashScreen);