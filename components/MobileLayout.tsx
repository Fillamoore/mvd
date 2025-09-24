// components/MobileLayout.tsx - UPDATED WITH FOOTER
'use client';

import { useState, useEffect } from 'react';
import ScenarioPlayer from './ScenarioPlayer';
import MobileScenariosPlayerFooter from './MobileScenariosPlayerFooter';
import { useLocalStore } from '@/store/useLocalStore';
import { getScenariosByModuleId } from '@/data/scenarios';

export default function MobileLayout() {
  const { currentModule, pickUpAndPutDown, revealScenario, setNextScenario } = useLocalStore();
  
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Get current scenario data for the footer
  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  const moduleScenarios = getScenariosByModuleId(moduleId);
  const storedCurrentScenario = currentModule ? pickUpAndPutDown[currentModule]?.currentScenario : null;
  const currentScenarioIndex = storedCurrentScenario ? storedCurrentScenario.scenarioId - 1 : 0;
  
  const userRatings = storedCurrentScenario?.userRatings || {};
  const allRated = ['A', 'B', 'C'].every(id => userRatings[id] != null);
  const isRevealed = storedCurrentScenario?.isRevealed || false;

  const handleReveal = () => {
    if (allRated) {
      revealScenario(moduleId);
    }
  };

  const handleNextScenario = () => {
    if (storedCurrentScenario && currentScenarioIndex < moduleScenarios.length - 1) {
      const nextScenarioId = storedCurrentScenario.scenarioId + 1;
      setNextScenario(nextScenarioId);
    }
  };

  if (!hydrated) {
    return (
      <div className="flex flex-col h-screen">
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="flex justify-center items-center h-full">Loading...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Main content area */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <ScenarioPlayer />
      </main>
      
      {/* Mobile footer */}
      <MobileScenariosPlayerFooter
        onReveal={handleReveal}
        onNextScenario={handleNextScenario}
        currentModuleId={moduleId}
        currentScenarioIndex={currentScenarioIndex}
        totalScenarios={moduleScenarios.length}
        allRated={allRated}
        isRevealed={isRevealed}
      />
    </div>
  );
}