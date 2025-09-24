// components/SplashScreen.tsx - FIXED MOBILE SCALING
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { generateCorrectClockwiseSpiralOrder } from '@/utils/spiral';

const GRID_SIZE = 7;
const TOTAL_TILES = 49;
const ANIMATION_INTERVAL = 50;

export default function SplashScreen() { 
  const [phase, setPhase] = useState<'logo' | 'grid' | 'animating' | 'done'>('logo');
  const [visibleTiles, setVisibleTiles] = useState(TOTAL_TILES);
  const [spiralOrder, setSpiralOrder] = useState<{ id: number; row: number; col: number }[]>([]);
  const [tileScores, setTileScores] = useState<number[][]>([]);
  const [animatedTiles, setAnimatedTiles] = useState<Set<number>>(new Set());
  const [dotPosition, setDotPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentTileRef = useRef<number>(0);
  const isMountedRef = useRef(true);

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
      isMountedRef.current = false;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    switch (phase) {
      case 'logo':
        setTimeout(() => isMountedRef.current && setPhase('grid'), 700);
        break;

      case 'grid':
        setVisibleTiles(TOTAL_TILES);
        setTimeout(() => {
          if (isMountedRef.current) {
            setVisibleTiles(0);
            setAnimatedTiles(new Set());
            setPhase('animating');
          }
        }, 700);
        break;

      case 'animating':
        startTileAnimation();
        break;

      case 'done':
        setTimeout(() => {
          if (isMountedRef.current) {
            // No action needed
          }
        }, 2000);
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
      }, 700);
    }
  }, [visibleTiles, phase]);

  const startTileAnimation = () => {
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
      }
    }, ANIMATION_INTERVAL);
  };

  const renderGrid = () => {
    if (!spiralOrder.length || !tileScores.length) return null;

    const spiralMap = new Map<string, { index: number; id: number }>();
    spiralOrder.forEach(({ row, col, id }, index) => {
      spiralMap.set(`${row},${col}`, { index, id });
    });

    // RESPONSIVE SIZING
    const tileSize = isMobile ? 'w-11 h-11' : 'w-14 h-14';
    const gridGap = isMobile ? 'gap-1' : 'gap-2';

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
                  className={`${tileSize} border border-gray-700 rounded-lg bg-black`}
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
                className={`${tileSize} border border-gray-700 rounded-lg ${isFinal ? 'animate-once-pulse' : ''} ${!dynamicBg ? bgClass : ''}`}
                style={dynamicBg ? { backgroundColor: dynamicBg } : undefined}
              />
            );
          })
        )}
      </div>
    );
  };

  const renderProgressBar = () => {
    const isFinalDot = animatedTiles.has(TOTAL_TILES - 1);
    const barWidth = isMobile ? 'max-w-xs' : 'max-w-xs md:max-w-md';

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
  };

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center h-screen bg-black text-white z-50`}>
      <div className={`flex flex-col items-center ${isMobile ? 'scale-75' : 'scale-[0.8]'} ${phase === 'logo' ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}>
        <Image
          src="/aalogo.png"
          alt="App Logo"
          width={isMobile ? 290 : 440}
          height={isMobile ? 95 : 140}
          priority
          style={{ width: 'auto', height: 'auto' }}    
        />
        <div className={`mt-2 flex flex-col items-center ${isMobile ? 'min-h-[200px]' : 'min-h-[360px]'}`}>
          {renderGrid()}
          {renderProgressBar()}
        </div>
      </div>
    </div>
  );
}