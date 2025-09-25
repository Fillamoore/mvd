// components/MobileLayout.tsx - FIXED
'use client';

import { useState, useEffect } from 'react';
import ScenarioPlayer from './ScenarioPlayer';
import MobileScenariosPlayerFooter from './MobileScenariosPlayerFooter';
import { useLocalStore } from '@/store/useLocalStore';

export default function MobileLayout() {
  const { currentModule, pickUpAndPutDown, revealScenario, triggerScenarioCompletion } = useLocalStore();
  
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  const storedCurrentScenario = currentModule ? pickUpAndPutDown[currentModule]?.currentScenario : null;
  
  const userRatings = storedCurrentScenario?.userRatings || {};
  const allRated = ['A', 'B', 'C'].every(id => userRatings[id] != null);
  const isRevealed = storedCurrentScenario?.isRevealed || false;

  const handleReveal = () => {
    if (allRated) {
      revealScenario(moduleId);
    }
  };

  const handleNextScenario = () => {
    triggerScenarioCompletion();
  };

  if (!hydrated) {
    return (
      <div className="flex flex-col h-screen bg-black">  
        <main className="flex-1 overflow-auto bg-black">  
          <div className="flex justify-center items-center h-full text-lilac-300">Loading...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black">
      <main className="flex-1 overflow-auto">
        <ScenarioPlayer />
      </main>
      
      <MobileScenariosPlayerFooter
        onReveal={handleReveal}
        onNextScenario={handleNextScenario}
        allRated={allRated}
        isRevealed={isRevealed}
      />
    </div>
  );
}