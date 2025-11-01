// components/ScenarioPlayer.tsx 
'use client';

import { useState, useEffect, memo } from 'react';
import ScenarioCard from '@/components/ScenarioCard';
import { useLocalStore } from '@/store/useLocalStore';
import Image from 'next/image';
import VerticalProgressBar from '@/components/VerticalProgressBar';
import { ModuleTile } from '@/components/ModuleTile';
import DesktopControlButton from '@/components/DesktopControlButton';
import { getScenariosByModuleId, getModuleById, type Response } from '@/data/scenarios-content';

const ScenarioPlayer = memo(function ScenarioPlayer() {
  //console.log('🎯 ScenarioPlayer RENDER');

  const currentModule = useLocalStore((state) => state.currentModule);
  const pickUpAndPutDown = useLocalStore((state) => state.pickUpAndPutDown);
  const performanceData = useLocalStore((state) => state.performanceData);
  const setExpertRankings = useLocalStore((state) => state.setExpertRankings);

  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // A one-off check / set of isMobile flag. Not sure if actually needed!
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

  // Get the moduleId from the store. If it doesn't exist, set to 1.
  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  // Get all the scenarios for this module.
  const currentModuleData = getModuleById(moduleId);
  if (!currentModuleData) {
    throw new Error(`Module with ID ${moduleId} not found in scenarios-content.ts`);
  }

  const moduleScenarios = getScenariosByModuleId(moduleId);
  
  const storedCurrentScenario = currentModule 
    ? pickUpAndPutDown[currentModule]?.currentScenario 
    : null;
  
  const currentScenarioIndex = storedCurrentScenario ? storedCurrentScenario.scenarioId - 1 : 0;
  const currentScenarioData = moduleScenarios[currentScenarioIndex];
  const isRevealed = storedCurrentScenario?.isRevealed || false;
  const userRankings = storedCurrentScenario?.userRankings || {};

  // SET EXPERT RANKINGS IMMEDIATELY WHEN SCENARIO DATA IS AVAILABLE
  useEffect(() => {
    if (currentScenarioData && currentScenarioData.responses) {
      const rankings: { [responseId: string]: number } = {};
      currentScenarioData.responses.forEach(response => {
        rankings[response.id] = 'expertRanking' in response ? (response as { expertRanking: number }).expertRanking : 0;
      });
      setExpertRankings(moduleId, currentScenarioData.id, rankings);
      //console.log('📊 SCENARIO PLAYER: Set expert rankings immediately', rankings);
    }
  }, [currentScenarioData, moduleId, setExpertRankings]);

  const getTileScore = (): number => {
    const performance = performanceData.find(p => p.moduleId === moduleId);
    if (performance && performance.scenariosCompleted > 0) {
      return performance.averageScore;
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

  //console.log("SCENARIO PLAYER: just before render", currentScenarioData?.id);

  return (
    <div className={`scenarios-player-pane border-1 border-gray-700 h-full flex flex-col ${containerBorderRadius}`}>

      {/* Header - conditional rounded top corners */}
      <div className={`scenarios-area-header border-b-1 p-1 border-gray-600 bg-black overflow-hidden text-white flex justify-between items-center ${headerBorderRadius}`}>
        <div className="icon-container p-1 flex items-center gap-2 select-none">
          <div style={{ backgroundColor: '#dfd5dbff', borderRadius: '3px', padding: '5px' }}>
            <Image
              src={`/module-infographics/${String(currentModuleData.module_id)}.webp`}
              alt={`Module ${currentModuleData.module_id} icon`}
              width={28}
              height={28}
            />
          </div>
          <h1 className="ml-1 text-base font-bold text-lilac-300 select-none">{currentModuleData.title}</h1>
        </div>
        <div className="mr-[10px]">
          <div className="flex items-center gap-[8px]">
              <ModuleTile moduleId={moduleId} score={getTileScore()} />
            <VerticalProgressBar
              current={currentScenarioIndex}
              total={moduleScenarios.length}
            />
          </div>
        </div>
      </div>

      <div
        key={moduleId}
        className={`scenarios-container bg-black bg-[url('/scenarios-canvas.webp')] bg-cover bg-center h-full overflow-y-auto ${contentBorderRadius}`}
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
              title={currentScenarioData.title}
              prompt={currentScenarioData.prompt}
              responses={currentScenarioData.responses.map((r: Response) => ({ id: r.id, title: r.title, text: r.text }))}
              expertRationales={isRevealed ? currentScenarioData.responses : undefined}
              totalScenarios={moduleScenarios.length}
              overall={currentScenarioData.overall}
              takeAway={currentScenarioData.takeAway}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center h-full text-lilac-300 text-lg">
            {hydrated ? 'No scenarios available for this module.' : 'Loading from Scenario Player...'}
          </div>
        )}
      </div>
      
      {/* Only show on desktop */}
      {!isMobile && <DesktopControlButton />}
    </div>
  );
});

export default ScenarioPlayer;