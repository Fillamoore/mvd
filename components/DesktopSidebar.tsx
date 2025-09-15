// components/DesktopSidebar.tsx - CLEANED UP
'use client';

import { useState, useEffect } from 'react';

// Mock data with deterministic values
const mockData = {
  currentLevel: 'Foundation',
  overallScore: '2.1',
  showOverallScore: true,
  progress: 0.25,
  modules: [
    { id: 1, name: 'Client Discovery', completed: true, score: 0.85 },
    { id: 2, name: 'Requirements Analysis', completed: true, score: 0.92 },
    { id: 3, name: 'Solution Design', completed: false, score: 0 },
  ]
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

// Deterministic scores based on tile ID (no randomness)
const getTileScore = (tileId: number) => {
  return 0.5 + ((tileId % 10) / 20);
};

export default function DesktopSidebar() {
  const [showScoreBreakdown, setShowScoreBreakdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [spiralTiles, setSpiralTiles] = useState<{id: number, row: number, col: number}[]>([]);

  useEffect(() => {
    setIsClient(true);
    setSpiralTiles(generateCorrectClockwiseSpiralOrder(7));
  }, []);

  const timelinePosition = 35;

  // Don't render grid until client-side
  if (!isClient || spiralTiles.length === 0) {
    return (
      <aside className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center mr-3">
            <span className="font-bold text-sm">AA</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Advisory Accelerator</h1>
        </div>
        <div className="text-sm text-gray-500">Loading grid...</div>
      </aside>
    );
  }

  // Create empty grid
  const grid = Array(7).fill(0).map(() => Array(7).fill(null));
  
  // Fill grid with spiral order tiles
  spiralTiles.forEach(({id, row, col}) => {
    if (row >= 0 && row < 7 && col >= 0 && col < 7) {
      grid[row][col] = {
        id,
        completed: id <= 12, // First 12 completed for demo
        score: getTileScore(id)
      };
    }
  });

  return (
    <aside className="w-80 bg-white border-r border-gray-200 p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center mr-3">
          <span className="font-bold text-sm">AA</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900">Advisory Accelerator</h1>
      </div>

      {/* Accreditation Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold text-gray-700">
            {mockData.currentLevel}
          </div>
          
          {mockData.showOverallScore && (
            <button
              onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
              className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              Overall: {mockData.overallScore}
            </button>
          )}
        </div>

        {showScoreBreakdown && (
          <div className="bg-blue-50 p-3 rounded-lg mb-3 text-xs">
            <div className="font-semibold mb-2">Score Breakdown:</div>
            <div>Foundation: 72%</div>
            <div>Intermediate: 45%</div>
            <div>Advanced: 15%</div>
          </div>
        )}
      </div>

      {/* 7x7 Grid Visualization */}
      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 w-full">
          {grid.map((row, rowIndex) => 
            row.map((tile, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`aspect-square rounded-sm border ${
                  tile?.completed
                    ? 'border-indigo-600'
                    : 'bg-gray-200 border-gray-300'
                }`}
                style={{
                  backgroundColor: tile?.completed
                    ? `rgba(99, 102, 241, ${tile.score})`
                    : '#f3f4f6'
                }}
                title={tile ? `Module ${tile.id}${tile.completed ? ` - Score: ${tile.score.toFixed(2)}` : ''}` : ''}
              />
            ))
          )}
        </div>
      </div>

      {/* Timeline Progress - SIMPLIFIED */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2 relative">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${timelinePosition}%` }}
          />
          {/* Dot positioned ON the timeline */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow"
            style={{ left: `${timelinePosition}%`, marginLeft: '-6px' }}
          />
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 overflow-y-auto">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Modules</h3>
        <div className="space-y-2">
          {mockData.modules.map((module) => (
            <div
              key={module.id}
              className={`p-3 rounded-lg border text-sm ${
                module.completed
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="font-medium">{module.name}</div>
              {module.completed && (
                <div className="text-xs text-gray-500 mt-1">
                  Score: {(module.score * 100).toFixed(0)}%
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}