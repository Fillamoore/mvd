'use client';

import { useState, useEffect } from 'react';
import MasterView from './MasterView';
import ScenarioPlayer from './ScenarioPlayer';
import MobileScenariosPlayerFooter from './MobileScenariosPlayerFooter';
import MobileMasterViewMenu from './MobileMasterViewMenu';
import { useLocalStore } from '@/store/useLocalStore';

export default function MobileLayout() {
  const [hydrated, setHydrated] = useState(false);
  const [activeScreen, setActiveScreen] = useState<'scenario' | 'master'>('scenario');

  const {
    currentModule,
    pickUpAndPutDown,
    revealScenario,
    triggerScenarioCompletion
  } = useLocalStore();

  useEffect(() => {
    setHydrated(true);
  }, []);

  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  const storedCurrentScenario = currentModule ? pickUpAndPutDown[currentModule]?.currentScenario : null;

  const userRankings = storedCurrentScenario?.userRankings || {};
  const allRated = ['A', 'B', 'C'].every(id => userRankings[id] != null);
  const isRevealed = storedCurrentScenario?.isRevealed || false;

  const handleReveal = () => {
    if (allRated) revealScenario(moduleId);
  };

  const handleNextScenario = () => {
    triggerScenarioCompletion();
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      <main className="flex-1 overflow-auto">
        {activeScreen === 'scenario' && <ScenarioPlayer />}
        {activeScreen === 'master' && <MasterView isMobile={true} />}
      </main>

      {activeScreen === 'scenario' && (
        <MobileScenariosPlayerFooter
          onReveal={handleReveal}
          onNextScenario={handleNextScenario}
          allRated={allRated}
          isRevealed={isRevealed}
          onSwitchToMaster={() => setActiveScreen('master')}
        />
      )}

      {activeScreen === 'master' && (
        <MobileMasterViewMenu onBackToScenario={() => setActiveScreen('scenario')} />
      )}
    </div>
  );
}
