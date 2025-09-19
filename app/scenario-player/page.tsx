'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ScenarioCard from '../../components/ScenarioCard';
// REMOVED: ScenarioFooter import
import { getScenariosByModuleId } from '../../data/scenarios';
import { getModuleById } from '../../data/modules';
import { useLocalStore } from '../../store/useLocalStore';
import Image from 'next/image';
// ADD: Import the new desktop control button
import DesktopControlButton from '../../components/DesktopControlButton';

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
  const currentScenario = moduleScenarios[currentScenarioIndex];

  // Use the new store
  const { ratings, revealedScenarios, setRevealed, setCurrentScenarioIndex: setCurrentScenarioIndexStore, recordPerformanceEvent } = useLocalStore();

  // Generate the scenario key for store lookup
  const scenarioKey = currentScenario ? `${moduleId}-${currentScenario.id}` : '';
  const scenarioRatings = ratings[scenarioKey] || {};
  const isRevealed = revealedScenarios[scenarioKey] || false;

  // VALIDATION: ALL RATINGS MUST BE COMPLETE FOR REVEAL
  const allRatingsComplete = currentScenario && 
    ['A', 'B', 'C'].every(responseId => {
      const rating = scenarioRatings[responseId]?.value;
      return rating !== null && rating !== undefined && rating > 0;
    });

  const handleReveal = () => {
    if (allRatingsComplete && currentScenario) {
      // Update the global state to mark this scenario as revealed
      setRevealed(moduleId, currentScenario.id, true);
      
      // RECORD PERFORMANCE EVENT
      const userRatings: { [key: string]: number | null } = {};
      Object.entries(scenarioRatings).forEach(([responseId, ratingValue]) => {
        userRatings[responseId] = ratingValue.value;
      });

      const expertRatings: { [key: string]: number } = {};
      currentScenario.responses.forEach((response: any) => {
        expertRatings[response.id] = response.expertRating;
      });

      // Call the store action to persist the event
      recordPerformanceEvent(moduleId, currentScenario.id, userRatings, expertRatings);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < moduleScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setCurrentScenarioIndexStore(currentScenarioIndex + 1);
    } else {
      // Optionally handle end of module
      console.log('End of module reached');
    }
  };

  const handleModuleChange = (newModuleId: number) => {
    router.push(`/scenario-player?module=${newModuleId}`);
    setCurrentScenarioIndex(0);
    setCurrentScenarioIndexStore(0);
  };

  if (!currentScenario) {
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
      {/* Module Header */}
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

      {/* Scenario Content */}

      <div className="scenarios-container bg-[url('/scenarios-canvas.jpg')] bg-cover bg-center w-full flex-1 overflow-auto py-6 px-[200px]">
        <ScenarioCard
          moduleId={moduleId}
          scenarioId={currentScenario.id}
          prompt={currentScenario.prompt}
          responses={currentScenario.responses.map(r => ({ id: r.id, text: r.text }))}
          expertRationales={isRevealed ? currentScenario.responses : undefined}
          isRevealed={isRevealed}
        />
      </div>

      {/* REPLACED: Desktop Control Button instead of Footer */}
      <DesktopControlButton
        onReveal={handleReveal}
        onNext={handleNextScenario}
        allRated={allRatingsComplete}
        isRevealed={isRevealed}
      />
    </div>
  );
}