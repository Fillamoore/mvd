// components/MasterView.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { SyntheticEvent } from 'react';

// Mock data with deterministic values
const mockData = {
  currentLevel: 'Foundation',
  overallScore: '2.1',
  showOverallScore: true,
  progress: 0.25,
  modules: [
    { id: 1, name: '1. Growth mindset', completed: true, score: 0.85 },
    { id: 2, name: '2. Professional curiosity', completed: true, score: 0.92 },
    { id: 3, name: '3. Active listening', completed: false, score: 0 },
    { id: 4, name: '4. Clear writing', completed: false, score: 0 },
    { id: 5, name: '5. Structured thinking', completed: false, score: 0 },
    { id: 6, name: '6. Time management', completed: false, score: 0 },
    { id: 7, name: '7. Stakeholder awareness', completed: false, score: 0 },
    { id: 8, name: '8. Note-taking discipline', completed: false, score: 0 },
    { id: 9, name: '9. Asking good questions', completed: false, score: 0 },
    { id: 10, name: '10. Self-awareness', completed: false, score: 0 },
    { id: 11, name: '11. Emotional intelligence', completed: true, score: 0.85 },
    { id: 12, name: '12. Team collaboration', completed: true, score: 0.92 },
    { id: 13, name: '13. Adaptability', completed: false, score: 0 },
    { id: 14, name: '14. Presentation basics', completed: false, score: 0 },
    { id: 15, name: '15. Business etiquette', completed: false, score: 0 },
    { id: 16, name: '16. Problem structuring', completed: false, score: 0 },
    { id: 17, name: '17. Hypothesis-led working', completed: false, score: 0 },
    { id: 18, name: '18. Basic financial literacy', completed: false, score: 0 },
    { id: 19, name: '19. Industry scanning', completed: false, score: 0 },
    { id: 20, name: '20. Root-cause analysis', completed: false, score: 0 },
    { id: 21, name: '21. Data interpretation', completed: true, score: 0.85 },
    { id: 22, name: '22. Excel modelling', completed: true, score: 0.92 },
    { id: 23, name: '23. Storyboarding', completed: false, score: 0 },
    { id: 24, name: '24. Meeting facilitation', completed: false, score: 0 },
    { id: 25, name: '25. Influence without authority', completed: false, score: 0 },
    { id: 26, name: '26. Client empathy', completed: false, score: 0 },
    { id: 27, name: '27. Negotiation basics', completed: false, score: 0 },
    { id: 28, name: '28. Risk awareness', completed: false, score: 0 },
    { id: 29, name: '29. Managing ambiguity', completed: false, score: 0 },
    { id: 30, name: '30. Persuasive communication', completed: false, score: 0 },
    { id: 31, name: '31. Strategic thinking', completed: true, score: 0.85 },
    { id: 32, name: '32. Market dynamics', completed: true, score: 0.92 },
    { id: 33, name: '33. Policy awareness', completed: false, score: 0 },
    { id: 34, name: '34. Systems thinking', completed: false, score: 0 },
    { id: 35, name: '35. Sustainability lens', completed: false, score: 0 },
    { id: 36, name: '36. Commercial awareness', completed: false, score: 0 },
    { id: 37, name: '37. Investment logic', completed: false, score: 0 },
    { id: 38, name: '38. Value-chain analysis', completed: false, score: 0 },
    { id: 39, name: '39. Scenario planning', completed: false, score: 0 },
    { id: 40, name: '40. Competitive positioning', completed: false, score: 0 },
    { id: 41, name: '41. Change management', completed: true, score: 0.85 },
    { id: 42, name: '42. Advisory presence', completed: true, score: 0.92 },
    { id: 43, name: '43. Executive communication', completed: false, score: 0 },
    { id: 44, name: '44. Building trust', completed: false, score: 0 },
    { id: 45, name: '45. Ethical judgement', completed: false, score: 0 },
    { id: 46, name: '46. Coaching juniors', completed: false, score: 0 },
    { id: 47, name: '47. Handling conflict', completed: false, score: 0 },
    { id: 48, name: '48. Managing up', completed: false, score: 0 },
    { id: 49, name: '49. Networking for influence', completed: false, score: 0 },
    { id: 50, name: '50. Thought leadership', completed: false, score: 0 }
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

interface MasterViewProps {
  isMobile?: boolean;
}

export default function MasterView({ isMobile = false }: MasterViewProps) {
  const [showScoreBreakdown, setShowScoreBreakdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [spiralTiles, setSpiralTiles] = useState<{id: number, row: number, col: number}[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    setIsClient(true);
    setSpiralTiles(generateCorrectClockwiseSpiralOrder(7));
  }, []);

  const handleImageError = (moduleId: number) => (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    setImageErrors(prev => new Set(prev).add(moduleId));
  };

  const timelinePosition = 35;

  // Don't render grid until client-side
  if (!isClient || spiralTiles.length === 0) {
    return (
      <div className={`${isMobile ? 'h-full flex flex-col' : 'h-full flex flex-col'} bg-white ${isMobile ? '' : 'border-r border-gray-200'} p-4`}>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center mr-3">
            <span className="font-bold text-xs">AA</span>
          </div>
          <h1 className="text-lg font-bold text-gray-900">Advisory Accelerator</h1>
        </div>
        <div className="text-sm text-gray-500">Loading grid...</div>
      </div>
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
    <div className={`${isMobile ? 'h-full flex flex-col' : 'h-full flex flex-col'} bg-white ${isMobile ? '' : 'border-r border-gray-200'} p-4`}>

      {/* Header  - no longer needed?*/}
      {/*
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center mr-3">
          <span className="font-bold text-xs">AA</span>
        </div>
        <h1 className="text-lg font-bold text-gray-900">Advisory Accelerator</h1>
      </div>
      */}

      {/* Accreditation Header */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs font-semibold text-gray-700">
            {mockData.currentLevel}
          </div>
          
          {mockData.showOverallScore && (
            <button
              onClick={() => setShowScoreBreakdown(!showScoreBreakdown)}
              className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              {mockData.overallScore}
            </button>
          )}
        </div>

        {showScoreBreakdown && (
          <div className="bg-blue-50 p-2 rounded-lg mb-2 text-xs">
            <div className="font-semibold mb-1">Score Breakdown:</div>
            <div>Foundation: 72%</div>
            <div>Intermediate: 45%</div>
            <div>Advanced: 15%</div>
          </div>
        )}
      </div>

      {/* 7x7 Grid Visualization - PROPERLY SIZED AND CENTERED */}
      <div className={`mb-6 flex justify-center ${isMobile ? 'scale-90' : ''}`}> {/* Fixed scaling */}
        <div className="grid grid-cols-7 gap-1 w-fit">
          {grid.map((row, rowIndex) => 
            row.map((tile, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-7 h-7 rounded-sm border ${ /* Fixed size */
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

      {/* Timeline Progress - REDUCED MARGIN AND LARGER DOT */}
      <div className={`mb-4 px-8 ${isMobile ? 'scale-90' : ''}`}>
        <div className="w-full bg-gray-200 rounded-full h-1.5 relative">
          <div
            className="bg-indigo-600 h-1.5 rounded-full"
            style={{ width: `${timelinePosition}%` }}
          />
          {/* Dot positioned ON the timeline - TWICE AS BIG */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"
            style={{ left: `${timelinePosition}%`, marginLeft: '-8px' }}
          />
        </div>
      </div>

      {/* Modules List with Icons */}
      <div className="flex-1 flex flex-col min-h-0">
        <h3 className="text-xs font-semibold text-gray-700 mb-2">Modules</h3>
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-1 pr-1">
            {mockData.modules.map((module) => (
              <div
                key={module.id}
                className={`p-2 rounded border text-xs ${
                  module.completed
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  {/* Module Icon with Fallback */}
                  <div className="w-6 h-6 mr-2 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center">
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
                  <div className="font-medium flex-1 min-w-0 text-xs">
                    {module.name}
                  </div>
                </div>
                
                {module.completed && (
                  <div className="text-[10px] text-gray-500 mt-1 ml-8">
                    Score: {(module.score * 100).toFixed(0)}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}