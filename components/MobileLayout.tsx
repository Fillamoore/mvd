// components/MobileLayout.tsx - SIMPLIFIED WITH DEBUG
'use client';

import { useState, useEffect } from 'react';
import ScenarioPlayer from './ScenarioPlayer';
import MobileScenariosPlayerFooter from './MobileScenariosPlayerFooter';
import { useLocalStore } from '@/store/useLocalStore';
import { getScenariosByModuleId } from '@/data/scenarios';

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
      <div className="flex flex-col h-screen border-4 border-purple-500"> {/* DEBUG */}
        <main className="flex-1 overflow-auto bg-gray-50 border-4 border-yellow-500"> {/* DEBUG */}
          <div className="flex justify-center items-center h-full">Loading...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen border-4 border-green-500 bg-green-100"> {/* DEBUG - MAKE VISIBLE */}
      <main className="flex-1 overflow-auto bg-gray-50 border-4 border-blue-500 min-h-0"> {/* DEBUG */}
        <ScenarioPlayer />
      </main>
      
      {/* DEBUG FOOTER CONTAINER - MAKE IT OBVIOUS */}
      <div className="border-4 border-red-500 bg-red-300 p-1 z-50"> {/* DEBUG */}
        <div className="text-red-600 font-bold text-center">FOOTER CONTAINER</div>
        <MobileScenariosPlayerFooter
          onReveal={handleReveal}
          onNextScenario={handleNextScenario}
          allRated={allRated}
          isRevealed={isRevealed}
        />
      </div>
    </div>
  );
}