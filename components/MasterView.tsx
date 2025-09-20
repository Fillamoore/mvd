'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { modules } from '@/data/modules';

// View data for the MasterView UI components
const masterViewData = {
  showOverallScore: true,
  overallScore: '2.1',
  progress: 0.25,
  moduleItems: modules.map(module => ({
    id: module.id,
    name: module.name,
    completed: false,
    score: 0
  }))
};

const generateCorrectClockwiseSpiralOrder = (size: number) => {
  const result = [];
  const grid = Array(size).fill(0).map(() => Array(size).fill(0));
  
  const center = Math.floor(size / 2);
  let row = center;
  let col = center;
  let id = 1;
  
  result.push({id, row, col});
  grid[row][col] = id;
  
  let step = 1;
  
  while (id < size * size) {
    // Right
    for (let i = 0; i < step; i++) {
      id++; if (id > size * size) break;
      col++; if (col >= size) break;
      result.push({id, row, col});
      grid[row][col] = id;
    }
    if (id >= size * size) break;
    
    // Down
    for (let i = 0; i < step; i++) {
      id++; if (id > size * size) break;
      row++; if (row >= size) break;
      result.push({id, row, col});
      grid[row][col] = id;
    }
    if (id >= size * size) break;
    
    step++;
    
    // Left
    for (let i = 0; i < step; i++) {
      id++; if (id > size * size) break;
      col--; if (col < 0) break;
      result.push({id, row, col});
      grid[row][col] = id;
    }
    if (id >= size * size) break;
    
    // Up
    for (let i = 0; i < step; i++) {
      id++; if (id > size * size) break;
      row--; if (row < 0) break;
      result.push({id, row, col});
      grid[row][col] = id;
    }
    if (id >= size * size) break;
    
    step++;
  }
  
  return result;
};


interface MasterViewProps {
  isMobile?: boolean;
}

// Calculate user's actual module score from store ratings, now with a check for spoofed scores.
const getTileScore = (moduleId: number, spoofScores: Record<number, number>): number => {
  // Check if the spoof score exists for this module
  if (spoofScores[moduleId]) {
    return spoofScores[moduleId];
  }
  // Fallback to the original logic
  return masterViewData.moduleItems.find(m => m.id === moduleId)?.score || 0;
};

export default function MasterView({ isMobile = false }: MasterViewProps) {
  const [isClient, setIsClient] = useState(false);
  const [spiralTiles, setSpiralTiles] = useState<{id: number, row: number, col: number}[]>([]);
  const [hoverModule, setHoverModule] = useState<number | null>(null);
  
  const spoofScores = {
    1: 0.75,
    2: 0.50,
    3: 0.85,
    4: 0.62,
    5: 0.91,
    6: 0.44,
    7: 0.78,
    8: 0.55,
    9: 0.89,
    10: 0.31,
    11: 0.77,
    12: 0.68,
    13: 0.95,
    14: 0.42,
    15: 0.83,
  };

  useEffect(() => {
    setIsClient(true);
    setSpiralTiles(generateCorrectClockwiseSpiralOrder(7));
  }, []);

  const timelinePosition = 35;

  if (!isClient) {
    return (
      <div className={`flex flex-col h-full bg-white ${!isMobile && 'border-r border-gray-200'} p-4`}>
        <div className="text-sm text-gray-500">Loading grid...</div>
      </div>
    );
  }

  const grid = Array(7).fill(0).map(() => Array(7).fill(null));
  
  spiralTiles.forEach(({id, row, col}) => {
    if (row >= 0 && row < 7 && col >= 0 && col < 7) {
      const moduleScore = getTileScore(id, spoofScores);
      const hasProgress = moduleScore > 0;
      
      grid[row][col] = {
        id,
        completed: hasProgress,
        score: moduleScore
      };
    }
  });

  return (
    <div className='master-view-container h-full flex flex-col bg-black'>

      {/* Header */}
      <div className="py-4 text-base font-bold text-center text-lilac-300">
        Advanced
      </div>

      {/* 7x7 Grid Visualization */}
      <div className={`mb-6 flex justify-center ${isMobile ? 'scale-90' : ''}`}>
        <div className="grid grid-cols-7 gap-1 w-fit">
          {grid.map((row, rowIndex) => 
            row.map((tile, colIndex) => {
              if (!tile) return null;

              const { id, completed, score } = tile;
              const module = masterViewData.moduleItems.find(m => m.id === id);

              let bgClass = '';
              if (id <= 9) {
                bgClass = 'bg-lilac-charcoal-f';
              } else if (id <= 25) {
                bgClass = 'bg-lilac-charcoal-i';
              } else {
                bgClass = 'bg-lilac-charcoal-a';
              }

              const dynamicBg = completed
                ? `rgba(200, 160, 255, ${score})`
                : undefined;

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-8 h-8 rounded-[4px] ${bgClass} ${hoverModule === id ? 'border-2 border-lilac-500' : ''}`}
                  style={{
                    backgroundColor: dynamicBg,
                  }}
                  title={module ? module.name : `Module ${id}`}
                  onMouseEnter={() => setHoverModule(id)}
                  onMouseLeave={() => setHoverModule(null)}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Timeline Progress */}
      <div className={`mb-7 px-[66px] ${isMobile ? 'scale-90' : ''}`}>
        <div className="w-full bg-gray-200 rounded-full h-1.5 relative">
          <div
            className="bg-lilac-500 h-1.5 rounded-full"
            style={{ width: `${timelinePosition}%` }}
          />
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-lilac-900 rounded-full border-2 border-white shadow"
            style={{ left: `${timelinePosition}%`, marginLeft: '-8px' }}
          />
        </div>
      </div>

      {/* Separator Line */}
      <div className="mb-1 border-t border-gray-600"></div>

      {/* Modules List */}
      <div className="modules-list-container px-3 pt-3 flex-1 bg-black text-white flex flex-col min-h-0">
        {/* Scrollable container with left-shifted scrollbar */}
        <div className="custom-scrollbar-container flex-1 min-h-0 overflow-y-auto overflow-x-hidden pl-1 ">
          <div className="mt-1 space-y-[3px] ">
            {masterViewData.moduleItems.map((module) => (
              <div
                key={module.id}
                className="list-item p-1 rounded text-xs transition-colors box-border bg-lilac-charcoal-f hover:bg-lilac-charcoal-i"
              >
                <div className="flex items-center min-w-0">
                  {/* Module Icon */}
                  <div className="w-10 h-10 mr-2 flex-shrink-0 bg-[#dfd5db] rounded-[3px] p-[4px] flex items-center justify-center">
                    <Image
                      src={`/module-infographics/${module.id}.png`}
                      alt={`Module ${module.id} icon`}
                      width={34}
                      height={34}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Module Name */}
                  <div className="font-medium flex-1 select-none text-base text-white overflow-hidden text-ellipsis whitespace-nowrap">
                    {module.name}
                  </div>
                  {module.completed && (
                    <div className="text-[10px] text-gray-300 mt-1 ml-8">
                      {(module.score * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}