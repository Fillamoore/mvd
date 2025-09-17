// components/MasterView.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { SyntheticEvent } from 'react';
import { modules, getModuleById } from '@/data/modules';
import { useScenariosProgressLocalStore } from '@/store/useScenariosProgressLocalStore';
import type { ScenariosProgressState } from '@/store/useScenariosProgressLocalStore';
import { getScenarioUniqueId } from '@/data/scenarios';
import { getScenariosByModuleId } from '@/data/scenarios'; // Add this import

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

// Generate CORRECT clockwise spiral order for 7x7 grid
const generateCorrectClockwiseSpiralOrder = (size: number) => {
  const result: {id: number, row: number, col: number}[] = [];
  const grid: number[][] = Array(size).fill(0).map(() => Array(size).fill(0));
  
  const center = Math.floor(size / 2);
  let row = center;
  let col = center;
  let id = 1;
  
  // Start at center (tile 1)
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
    
    step++; // Increase step size
    
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
    
    step++; // Increase step size
  }
  
  return result;
};

// Calculate user's actual module score from store ratings
const getTileScore = (moduleId: number, ratings: ScenariosProgressState['ratings']): number => {
  const moduleScenarios = getScenariosByModuleId(moduleId);
  
  if (moduleScenarios.length === 0) {
    return 0;
  }

  let totalModuleScore = 0;
  let completedScenarios = 0;

  moduleScenarios.forEach((scenario) => {
    const uniqueScenarioId = getScenarioUniqueId(moduleId, scenario.id);
    const scenarioRatings = ratings[uniqueScenarioId];
    
    if (scenarioRatings) {
      const responseRatings = Object.values(scenarioRatings);
      const completedResponses = responseRatings.filter(r => r.value !== null);
      
      if (completedResponses.length === 3) {
        const scenarioScore = completedResponses.reduce((sum, rating) => sum + (rating.value || 0), 0) / 3;
        totalModuleScore += scenarioScore;
        completedScenarios++;
      }
    }
  });

  return completedScenarios > 0 ? (totalModuleScore / completedScenarios) / 5 : 0;
};

interface MasterViewProps {
  isMobile?: boolean;
  onModuleSelect?: (moduleId: number) => void;
}

export default function MasterView({ isMobile = false, onModuleSelect }: MasterViewProps) {
  const [showScoreBreakdown, setShowScoreBreakdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [spiralTiles, setSpiralTiles] = useState<{id: number, row: number, col: number}[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [debugSelectedModule, setDebugSelectedModule] = useState<number | null>(null);
  
  const currentModuleId = useScenariosProgressLocalStore(state => state.currentModuleId);
  const setCurrentModule = useScenariosProgressLocalStore(state => state.setCurrentModule);
  const userLevel = useScenariosProgressLocalStore(state => state.userLevel || 'Foundation');
  const ratings = useScenariosProgressLocalStore(state => state.ratings);

  useEffect(() => {
    setIsClient(true);
    setSpiralTiles(generateCorrectClockwiseSpiralOrder(7));
  }, []);

  const handleImageError = (moduleId: number) => (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    setImageErrors(prev => new Set(prev).add(moduleId));
  };

  const isModuleSelectable = (moduleId: number): boolean => {
    if (userLevel === 'Foundation' && moduleId > 9) return false;
    if (userLevel === 'Intermediate' && moduleId > 26) return false;
    return true;
  };

  const handleModuleClick = (moduleId: number, moduleName: string) => {
    if (!isModuleSelectable(moduleId)) {
      console.log(`[DEBUG] Module ${moduleId} is not selectable for ${userLevel} level`);
      return;
    }

    console.log(`[DEBUG] Module selected: ${moduleId} - ${moduleName}`);
    setDebugSelectedModule(moduleId);
    setCurrentModule(moduleId);
    
    if (onModuleSelect) {
      onModuleSelect(moduleId);
    }
  };

  const timelinePosition = 35;

  if (!isClient || spiralTiles.length === 0) {
    return (
      <div className={`${isMobile ? 'h-full flex flex-col' : 'h-full flex flex-col'} bg-white ${isMobile ? '' : 'border-r border-gray-200'} p-4`}>
        <div className="text-sm text-gray-500">Loading grid...</div>
      </div>
    );
  }

  const grid = Array(7).fill(0).map(() => Array(7).fill(null));
  
  spiralTiles.forEach(({id, row, col}) => {
    if (row >= 0 && row < 7 && col >= 0 && col < 7) {
      const moduleScore = getTileScore(id, ratings);
      const hasProgress = moduleScore > 0;
      
      grid[row][col] = {
        id,
        completed: hasProgress,
        score: moduleScore
      };
    }
  });

  const updatedModuleItems = masterViewData.moduleItems.map(module => ({
    ...module,
    completed: getTileScore(module.id, ratings) > 0,
    score: getTileScore(module.id, ratings)
  }));

  return (
    <div className={`${isMobile ? 'h-full flex flex-col' : 'h-full flex flex-col'} bg-black ${isMobile ? '' : 'border-r border-gray-200'} p-3 overflow-x-hidden`}>

      {/*
      
      <div className="bg-gray-100 border border-gray-300 rounded p-3 mb-4">
        <div className="text-xs font-semibold text-gray-700 mb-2">CURRENT STATE</div>
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-gray-600">User Level:</span>
            <span className="font-semibold ml-2">{userLevel}</span>
          </div>
          <div>
            <span className="text-gray-600">Current Module:</span>
            <span className="font-semibold ml-2">{currentModuleId}</span>
          </div>
          <div>
            <span className="text-gray-600">Max Allowed:</span>
            <span className="font-semibold ml-2">
              {userLevel === 'Foundation' ? 9 : userLevel === 'Intermediate' ? 26 : 49}
            </span>
          </div>
          <div>
            <span className="text-gray-600">Completed Modules:</span>
            <span className="font-semibold ml-2">
              {updatedModuleItems.filter(m => m.completed).length} of {updatedModuleItems.length}
            </span>
          </div>
        </div>
      </div>

      {debugSelectedModule && (
        <div className="bg-blue-100 border border-blue-300 text-blue-700 px-3 py-2 rounded mb-3 text-xs">
          <strong>SELECTED:</strong> Module {debugSelectedModule}
          <button 
            onClick={() => setDebugSelectedModule(null)}
            className="ml-2 text-blue-500 hover:text-blue-700"
          >
            × Clear
          </button>
        </div>
      )}

      */}

      {/* Accreditation Header */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="text-base text-lilac-300">
            {userLevel}
          </div>
          
          {/*
          {masterViewData.showOverallScore && (
            <button
              onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
              className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              {masterViewData.overallScore}
            </button>
          )}
          */}  
        </div>

        {/*}    
        {showScoreBreakdown && (
          <div className="bg-blue-50 p-2 rounded-lg mb-2 text-xs">
            <div className="font-semibold mb-1">Score Breakdown:</div>
            <div>Completed Modules: {updatedModuleItems.filter(m => m.completed).length}</div>
            <div>Total Progress: {(updatedModuleItems.reduce((sum, m) => sum + m.score, 0) / updatedModuleItems.length * 100).toFixed(1)}%</div>
          </div>
        )}
        */}

      </div>

      {/* 7x7 Grid Visualization */}
      <div className={`mb-6 flex justify-center ${isMobile ? 'scale-90' : ''}`}>
        <div className="grid grid-cols-7 gap-1 w-fit">
          {grid.map((row, rowIndex) => 
            row.map((tile, colIndex) => {
              if (!tile) return null;

              const { id, completed, score } = tile;

              // Determine level-based background class
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
                  className={`w-8 h-8 rounded-[4px] ${completed ? 'border border-indigo-600' : bgClass}`}
                  style={{
                    backgroundColor: dynamicBg,
                  }}
                  title={`Module ${id}${completed ? ` - Score: ${(score * 100).toFixed(0)}%` : ''}`}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Timeline Progress */}
      <div className={`mb-4 px-[24px] ${isMobile ? 'scale-90' : ''}`}>
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

      {/* Modules List */}
      <div className="flex-1 bg-black text-white flex flex-col min-h-0">
        <h3 className="text-xs font-semibold text-white mb-2 ml-3">Modules</h3>
        <div className="flex-1 overflow-y-auto overflow-x-hidden max-w-full custom-scrollbar pr-1">
          <div className="space-y-1">
            {updatedModuleItems.map((module) => {
              const isSelectable = isModuleSelectable(module.id);
              const isActive = currentModuleId === module.id;

              return (
                <div
                  key={module.id}
                  className={`p-2 mx-3 rounded-[6px] text-xs transition-colors w-[calc(100%-24px)] box-border
                    ${module.id <= 9 ? 'bg-lilac-charcoal-f' : module.id <= 25 ? 'bg-lilac-charcoal-i' : 'bg-lilac-charcoal-a'}
                    ${isSelectable ? 'cursor-pointer hover:ring-2 hover:ring-lilac-300' : 'cursor-not-allowed'}
                  `}
                  onClick={() => isSelectable && handleModuleClick(module.id, module.name)}
                  title={!isSelectable ? 
                    `Not available for ${userLevel} level` : 
                    `Select ${module.name}`}
                >
                  <div className="flex items-center min-w-0">
                    {/* Module Icon */}
                    <div className="w-8 h-8 mr-2 flex-shrink-0 bg-[#dfd5db] rounded-[3px] p-[4px] flex items-center justify-center">
                      {imageErrors.has(module.id) ? (
                        <div className="w-4 h-4 bg-indigo-100 rounded flex items-center justify-center">
                          <span className="text-[10px] font-medium text-indigo-600">{module.id}</span>
                        </div>
                      ) : (
                        <Image
                          src={`/module-infographics/${module.id}.png`}
                          alt={`Module ${module.id} icon`}
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                          onError={handleImageError(module.id)}
                        />
                      )}
                    </div>
                    {/* Module Name */}
                    <div className="font-medium flex-1 text-xs text-white overflow-hidden text-ellipsis whitespace-nowrap">
                      {module.name}
                    </div>
                  </div>
                  {module.completed && (
                    <div className="text-[10px] text-gray-300 mt-1 ml-8">
                      Score: {(module.score * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}