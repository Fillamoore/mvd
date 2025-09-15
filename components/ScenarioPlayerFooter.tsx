// components/ScenarioPlayerFooter.tsx - COMPLETE LOGIC
'use client';

import Image from 'next/image';
import { useScenariosProgressLocalStore } from '@/store/useScenariosProgressLocalStore';
import { modules } from '@/data/modules';
import { getScenariosByModuleId } from '@/data/scenarios';

export default function ScenarioPlayerFooter() {
  const { 
    currentModuleId, 
    currentScenarioIndex,
    setCurrentModule,
    setCurrentScenarioIndex,
    setRating,
    resetScenario
  } = useScenariosProgressLocalStore();

  const currentModule = modules.find(m => m.id === currentModuleId)!;
  const moduleScenarios = getScenariosByModuleId(currentModuleId);
  
  const canGoPreviousModule = currentModuleId > 1;
  const canGoNextModule = currentModuleId < modules.length;
  const canSkipScenario = currentScenarioIndex < moduleScenarios.length - 1;

  const handlePreviousModule = () => {
    if (canGoPreviousModule) {
      setCurrentModule(currentModuleId - 1);
      setCurrentScenarioIndex(0); // Reset to first scenario
      resetScenario(moduleScenarios[0]?.id); // Reset ratings for new scenario
    }
  };

  const handleNextModule = () => {
    if (canGoNextModule) {
      setCurrentModule(currentModuleId + 1);
      setCurrentScenarioIndex(0); // Reset to first scenario
      resetScenario(moduleScenarios[0]?.id); // Reset ratings for new scenario
    }
  };

  const handleSkipScenario = () => {
    if (canSkipScenario) {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      resetScenario(moduleScenarios[currentScenarioIndex + 1]?.id);
    }
  };

  const handleReveal = () => {
    // Your existing reveal logic here
  };

  return (
    <footer className="bg-white border-t border-gray-200 p-3">
      <div className="flex justify-around items-center">
        {/* Previous Module */}
        <button onClick={handlePreviousModule} disabled={!canGoPreviousModule} className="...">
          {/* ... icon and label ... */}
        </button>

        {/* Next Module */}
        <button onClick={handleNextModule} disabled={!canGoNextModule} className="...">
          {/* ... icon and label ... */}
        </button>

        {/* Skip Scenario */}
        <button onClick={handleSkipScenario} disabled={!canSkipScenario} className="...">
          {/* ... icon and label ... */}
        </button>

        {/* Reveal */}
        <button onClick={handleReveal} className="...">
          {/* ... icon and label ... */}
        </button>
      </div>
    </footer>
  );
}