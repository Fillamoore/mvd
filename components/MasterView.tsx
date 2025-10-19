'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { modules } from '@/data/modules';
import { useLocalStore } from '@/store/useLocalStore';
import { useShallow } from 'zustand/react/shallow';

// Re-using the spiral function that you had
const generateCorrectClockwiseSpiralOrder = (size: number) => {  const result = [];
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

export default function MasterView({ isMobile = false }: MasterViewProps) {
  const [isClient, setIsClient] = useState(false);
  const [spiralTiles, setSpiralTiles] = useState<{id: number, row: number, col: number}[]>([]);
  const [hoverModule, setHoverModule] = useState<number | null>(null);

  const { currentModule, pickUpAndPutDown, setCurrentModule } = useLocalStore(useShallow(state => ({
    currentModule: state.currentModule,
    pickUpAndPutDown: state.pickUpAndPutDown,
    setCurrentModule: state.setCurrentModule,
  })));
  
  const currentModuleId = currentModule ? parseInt(currentModule, 10) : 1;
  
  const getTileScore = (moduleId: number): number => {
    const moduleData = pickUpAndPutDown[moduleId.toString()];
    
    if (moduleData && moduleData.completedScenarios.length > 0) {
      const totalScore = moduleData.completedScenarios.reduce((sum, scenario) => sum + scenario.score, 0);
      const averageScore = totalScore / moduleData.completedScenarios.length;
      return averageScore;
    }
    
    return 0;
  };
  
  // Dynamically generate module data for the list
  const renderedModuleItems = modules.map(thisModule => {
    const score = getTileScore(thisModule.id);
    const completed = score > 0;
    return {
      id: thisModule.id,
      name: thisModule.name,
      completed,
      score
    };
  });
  
  useEffect(() => {
    setIsClient(true);
    setSpiralTiles(generateCorrectClockwiseSpiralOrder(7));
  }, []);

  const timelinePosition = 35;

  if (!isClient) {
    return (
      <div className={`flex flex-col h-full bg-black ${!isMobile && 'border-r border-gray-200'} p-4`}>
        <div className="text-sm text-gray-500">Loading grid...</div>
      </div>
    );
  }

  const grid = Array(7).fill(0).map(() => Array(7).fill(null));
  
  spiralTiles.forEach(({id, row, col}) => {
    if (row >= 0 && row < 7 && col >= 0 && col < 7) {
      const moduleScore = getTileScore(id);
      const hasProgress = moduleScore > 0;
      
      grid[row][col] = {
        id,
        completed: hasProgress,
        score: moduleScore
      };
    }
  });
  
  // This new function handles both state update and navigation
  const handleModuleClick = (moduleId: number) => {
    setCurrentModule(moduleId);
    //router.push(`/scenario-player?module=${moduleId}`);
  };

  return (
    <div className={`master-view-container  ${isMobile ? '' : 'p-5'} h-full flex flex-col bg-black`}>
      
    <div className="logo flex justify-center items-center gap-2">
      <img
        src="/qikr-logo.png"
        alt="qikr logo"
        className={isMobile ? 'w-[120px] h-auto' : 'w-32 h-auto'}
      />
    </div>

      <div className={`mb-6 flex justify-center  ${isMobile ? 'px-2 mt-3' : 'mt-6'}`}>
        <div className="grid grid-cols-7 gap-1 w-fit">
          {grid.map((row, rowIndex) => (
            row.map((tile, colIndex) => {
              if (!tile) return null;

              const { id, completed, score } = tile;
              const thisModule = modules.find(m => m.id === id);
              const isCurrentModule = id === currentModuleId;

              let bgClass = '';
              if (id <= 9) {
                bgClass = 'bg-lilac-charcoal-f';
              } else if (id <= 25) {
                bgClass = 'bg-lilac-charcoal-i';
              } else {
                bgClass = 'bg-lilac-charcoal-a';
              }

              const dynamicBg = completed
                ? `rgba(200, 160, 255, ${score/100})`
                : undefined;
              
              let borderClass = '';
              if (isCurrentModule) {
                borderClass = 'border-2 border-gray-300';
              } 
              if (hoverModule === id) {
                borderClass = 'border-2 border-gray-400';
              }

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-9 h-9 rounded-[4px] ${bgClass} ${borderClass}`}
                  style={{
                    backgroundColor: dynamicBg,
                  }}
                  title={`${thisModule ? thisModule.name : `Module ${id}`}${completed ? ` - ${score.toFixed(0)}%` : ''}`}
                  onMouseEnter={() => setHoverModule(id)}
                  onMouseLeave={() => setHoverModule(null)}
                  onClick={() => {
                    handleModuleClick(id);
                  }}
                />
              );
            })
          ))}
        </div>
      </div>

      <div className={`mb-4 ${isMobile ? 'px-[50px]' : 'px-[32px]'}`}>
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

      <div className={`modules-list-container pt-3 pb-4 flex-1 bg-black text-white flex flex-col min-h-0 ${isMobile ? 'px-[44px]' : 'pl-7 pr-7'}`}>
        <div className="custom-scrollbar-container flex-1 min-h-0 overflow-y-auto overflow-x-hidden pl-1 ">
          <div className="mt-1 space-y-[2px] ">
            {renderedModuleItems.map((moduleItem) => {
              const isCurrentModule = moduleItem.id === currentModuleId;
              const bgColorClass = isCurrentModule
                ? 'bg-lilac-master-hover-2 hover:bg-lilac-master-hover-3'
                : 'bg-lilac-charcoal-f hover:bg-lilac-charcoal-i';

              return (
                <div
                  key={moduleItem.id}
                  className={`list-item p-1 rounded text-xs transition-colors box-border ${bgColorClass}`}
                  onClick={() => {
                    handleModuleClick(moduleItem.id);
                  }}
                >
                  <div className="flex items-center min-w-0">
                    <div className="w-8 h-8 mr-2 flex-shrink-0 bg-[#dfd5db] rounded-[3px] select-none p-[3px] flex items-center justify-center">
                      <Image
                        src={`/module-infographics/${moduleItem.id}.png`}
                        alt={`Module ${moduleItem.id} icon`}
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="flex-1 select-none text-xs text-white overflow-hidden text-ellipsis whitespace-nowrap">
                      {moduleItem.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}