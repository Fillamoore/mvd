// components/ScenarioPlayer.tsx 
'use client';

import { useState, useEffect } from 'react';
import ScenarioCard from '@/components/ScenarioCard';
import { getScenariosByModuleId } from '@/data/scenarios';
import { getModuleById } from '@/data/modules';
import { useLocalStore } from '@/store/useLocalStore';
import Image from 'next/image';
import { useShallow } from 'zustand/react/shallow';
import VerticalProgressBar from '@/components/VerticalProgressBar';
import { ModuleTile } from '@/components/ModuleTile';
import DesktopControlButton from '@/components/DesktopControlButton';

export default function ScenarioPlayer() {
  const {
    currentModule,
    pickUpAndPutDown,
    setCurrentScenario,
    setExpertRankings,
  } = useLocalStore(useShallow((state) => ({
    currentModule: state.currentModule,
    pickUpAndPutDown: state.pickUpAndPutDown,
    setCurrentScenario: state.setCurrentScenario,
    setExpertRankings: state.setExpertRankings,
  })));

  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    setHydrated(true);
    // Add a tiny delay to ensure everything is settled
    const timer = setTimeout(() => setIsInitialized(true), 50);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  const currentModuleData = getModuleById(moduleId);
  if (!currentModuleData) {
    throw new Error(`Module with ID ${moduleId} not found in modules.ts`);
  }

  const moduleScenarios = getScenariosByModuleId(moduleId);
  
  const storedCurrentScenario = currentModule 
    ? pickUpAndPutDown[currentModule]?.currentScenario 
    : null;
  
  const currentScenarioIndex = storedCurrentScenario ? storedCurrentScenario.scenarioId - 1 : 0;
  const currentScenarioData = moduleScenarios[currentScenarioIndex];

  useEffect(() => {
    if (hydrated && currentScenarioData && !storedCurrentScenario) {
      setCurrentScenario(moduleId, currentScenarioData.id);
      
      const expertRankingsMap: { [key: string]: number } = {};
      currentScenarioData.responses.forEach(response => {
        if (response.expertRanking) {
          expertRankingsMap[response.id] = response.expertRanking;
        }
      });
      setExpertRankings(moduleId, currentScenarioData.id, expertRankingsMap);
    }
  }, [hydrated, storedCurrentScenario, currentScenarioData, moduleId, setCurrentScenario, setExpertRankings]);

  const isRevealed = storedCurrentScenario?.isRevealed || false;
  const userRankings = storedCurrentScenario?.userRankings || {};

  const getTileScore = (): number => {
    const moduleData = pickUpAndPutDown[moduleId.toString()];
    if (moduleData && moduleData.completedScenarios.length > 0) {
      const totalScore = moduleData.completedScenarios.reduce((sum, scenario) => sum + scenario.score, 0);
      return totalScore / moduleData.completedScenarios.length;
    }
    return 0;
  };

  // FIXED: Conditional border radius for desktop
  const containerBorderRadius = isMobile ? 'rounded-none' : 'rounded-[10px]';
  const headerBorderRadius = isMobile ? 'rounded-none' : 'rounded-t-[10px]';
  const contentBorderRadius = isMobile ? 'rounded-none' : 'rounded-b-[10px]';

  // FIX: Don't render anything until fully initialized to prevent flash
  if (!isInitialized) {
    return (
      <div className="scenarios-player-pane border-1 border-gray-700 h-full flex flex-col bg-black">
        <div className="scenarios-area-header border-b-1 p-1 border-gray-600 bg-black" />
        <div className={`scenarios-container bg-black w-full flex-1`} />
      </div>
    );
  }

  return (
    <div className={`scenarios-player-pane border-1 border-gray-700 h-full flex flex-col ${containerBorderRadius}`}>

      {/* Header - conditional rounded top corners */}
      <div className={`scenarios-area-header border-b-1 p-1 border-gray-600 bg-black overflow-auto overflow-hidden text-white flex justify-between items-center ${headerBorderRadius}`}>
        <div className="icon-container p-1 flex items-center gap-2 select-none">
          <div style={{ backgroundColor: '#dfd5dbff', borderRadius: '3px', padding: '5px' }}>
            <Image
              src={`/module-infographics/${String(currentModuleData.id)}.png`}
              alt={`Module ${currentModuleData.id} icon`}
              width={28}
              height={28}
            />
          </div>
          <h1 className="ml-1 text-base font-bold text-lilac-300 select-none">{currentModuleData.name}</h1>
        </div>
        <div className="mr-[6px]">
          <div className="flex items-center gap-[2px]">
            <div className="p-1">
              <ModuleTile moduleId={moduleId} score={getTileScore()} />
            </div>
            <VerticalProgressBar
              current={currentScenarioIndex}
              total={moduleScenarios.length}
            />
          </div>
        </div>
      </div>

      <div
        key={moduleId}
        className={`scenarios-container bg-black bg-[url('/scenarios-canvas.jpg')] bg-cover bg-center h-full overflow-y-auto ${contentBorderRadius}`}
      >
        {hydrated && currentScenarioData ? (
          <div 
            key={`scenario-${currentScenarioData.id}`} 
            className="custom-scrollbar-container pt-5 overflow-y-auto h-full" 
            style={{ scrollbarGutter: 'stable' }}
          >
            <ScenarioCard
              moduleId={moduleId}
              scenarioId={currentScenarioData.id}
              prompt={currentScenarioData.prompt}
              responses={currentScenarioData.responses.map(r => ({ id: r.id, text: r.text }))}
              expertRationales={isRevealed ? currentScenarioData.responses : undefined}
              totalScenarios={moduleScenarios.length}
              overall={currentScenarioData.overall}
              takeAway={currentScenarioData.takeAway}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-lilac-300 text-lg">
            {hydrated ? 'No scenarios available for this module.' : 'Loading...'}
          </div>
        )}
      </div>
      
      {/* Only show on desktop */}
      {!isMobile && <DesktopControlButton />}
    </div>
  );
}