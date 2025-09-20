'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ScenarioCard from '@/components/ScenarioCard';
import StoreTest from '@/components/StoreTest'; // Add this import
import { getScenariosByModuleId } from '@/data/scenarios';
import { getModuleById } from '@/data/modules';
import { useLocalStore } from '@/store/useLocalStore';
import Image from 'next/image';
import DesktopControlButton from '@/components/DesktopControlButton';
import { useShallow } from 'zustand/react/shallow';

export default function ScenarioPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const moduleId = parseInt(searchParams.get('module') || '1');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const currentModule = getModuleById(moduleId);
  if (!currentModule) {
    throw new Error(`Module with ID ${moduleId} not found in modules.ts`);
  }

  const moduleScenarios = getScenariosByModuleId(moduleId);
  const currentScenarioData = useMemo(() => moduleScenarios[currentScenarioIndex], [moduleScenarios, currentScenarioIndex]);

  // Get store state
  const { currentScenario, recordPerformanceEvent, revealScenario, setCurrentScenarioStore, clearCurrentScenario } = useLocalStore(useShallow((state) => {
    const moduleData = state.pickUpAndPutDown[moduleId.toString()];
    const currentScenario = moduleData?.currentScenario || null;
    
    return {
      currentScenario,
      recordPerformanceEvent: state.recordPerformanceEvent,
      revealScenario: state.revealScenario,
      setCurrentScenarioStore: state.setCurrentScenario,
      clearCurrentScenario: state.clearCurrentScenario,
    };
  }));

  // Set current scenario when scenario index or module changes
  useEffect(() => {
    
    console.log('⚡ ScenarioPlayer: useEffect triggered -', {
      moduleId,
      currentScenarioIndex,
      currentScenarioDataId: currentScenarioData?.id,
      storeScenarioId: currentScenario?.scenarioId
    });

    if (currentScenarioData) {
      console.log('🎯 Setting scenario in store:', currentScenarioData.id);
      setCurrentScenarioStore(moduleId, currentScenarioData.id);
    }
  }, [moduleId, currentScenarioIndex, currentScenarioData, setCurrentScenarioStore]);

  const isRevealed = currentScenario?.isRevealed || false;
  const userRatings = currentScenario?.userRatings || {};

  const allRatingsComplete = currentScenarioData && 
    ['A', 'B', 'C'].every(responseId => {
      const rating = userRatings[responseId];
      return rating !== null && rating !== undefined && rating > 0;
    });

  const handleReveal = () => {
    if (allRatingsComplete && currentScenarioData) {
      revealScenario(moduleId);
      
      const userRatingsMap: { [key: string]: number | null } = userRatings;
      const expertRatingsMap: { [key: string]: number } = {};
      currentScenarioData.responses.forEach(response => {
        if (response.expertRating) {
          expertRatingsMap[response.id] = response.expertRating;
        }
      });

      recordPerformanceEvent(moduleId, currentScenarioData.id, userRatingsMap, expertRatingsMap);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < moduleScenarios.length - 1) {
      console.log('➡️ NEXT clicked - Current state:', {
        currentIndex: currentScenarioIndex,
        nextIndex: currentScenarioIndex + 1,
        nextScenarioId: moduleScenarios[currentScenarioIndex + 1].id,
        currentStoreScenario: currentScenario // Log what's currently in store
      });
      
      // Clear current scenario
      console.log('🧹 Clearing current scenario...');
      clearCurrentScenario(moduleId);
      
      // Small delay to ensure store update propagates
      setTimeout(() => {
        console.log('📈 Setting new scenario index...');
        setCurrentScenarioIndex(prev => prev + 1);
      }, 50);
    } else {
      console.log('🏁 End of module reached');
    }
  };

  const handleModuleChange = (newModuleId: number) => {
    router.push(`/scenario-player?module=${newModuleId}`);
    setCurrentScenarioIndex(0);
  };

  if (!currentScenarioData) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">No scenarios found</h2>
          <p className="text-gray-600 mt-2">This module does not have any scenarios yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scenarios-player-pane h-full flex flex-col">
      <div className="scenarios-area-header p-2 border-b-1 border-gray-600 bg-black text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div style={{ backgroundColor: '#dfd5dbff', borderRadius: '3px', padding: '4px' }}>
            <Image
              src={`/module-infographics/${String(currentModule.id)}.png`}
              alt={`Module ${currentModule.id} icon`} 
              width={40}
              height={40}
              className="w-9 h-9 object-contain"
            />
          </div>
          <h1 className="ml-1 text-base font-bold text-lilac-300">{currentModule.name}</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center text-sm text-lilac-300 border-2 border-lilac-300 rounded-md px-1.5 py-1 min-w-[2.5rem]">
            {currentScenarioIndex + 1}/{moduleScenarios.length}
          </div>
          <div className="bg-black rounded-md p-1">
            <Image
              src={`/more-icon.png`}
              alt='Menu'
              width={42}
              height={42}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="scenarios-container bg-[url('/scenarios-canvas.jpg')] bg-cover bg-center w-full flex-1 overflow-auto py-6 px-[200px]">
        <ScenarioCard
          moduleId={moduleId}
          scenarioId={currentScenarioData.id}
          prompt={currentScenarioData.prompt}
          responses={currentScenarioData.responses.map(r => ({ id: r.id, text: r.text }))}
          expertRationales={isRevealed ? currentScenarioData.responses : undefined}
        />
      </div>

      <DesktopControlButton
        onReveal={handleReveal}
        onNext={handleNextScenario}
        allRated={allRatingsComplete}
        isRevealed={isRevealed}
      />
    </div>
  );
}