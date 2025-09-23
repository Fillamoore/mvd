'use client';

import { useState, useEffect } from 'react';
import ScenarioCard from '@/components/ScenarioCard';
import { getScenariosByModuleId } from '@/data/scenarios';
import { getModuleById } from '@/data/modules';
import { useLocalStore } from '@/store/useLocalStore';
import Image from 'next/image';
import DesktopControlButton from '@/components/DesktopControlButton';
import { useShallow } from 'zustand/react/shallow';
import VerticalProgressBar from '@/components/VerticalProgressBar';
import { ModuleTile } from '@/components/ModuleTile';

export default function ScenarioPlayer() {
  const {
    currentModule,
    getCurrentScenario,
    recordPerformanceEvent,
    revealScenario,
    setCurrentScenarioStore,
    clearCurrentScenario,
    pickUpAndPutDown,
  } = useLocalStore(useShallow((state) => ({
    currentModule: state.currentModule,
    getCurrentScenario: state.getCurrentScenario,
    recordPerformanceEvent: state.recordPerformanceEvent,
    revealScenario: state.revealScenario,
    setCurrentScenarioStore: state.setCurrentScenario,
    clearCurrentScenario: state.clearCurrentScenario,
    pickUpAndPutDown: state.pickUpAndPutDown,
  })));

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;
  const currentModuleData = getModuleById(moduleId);
  if (!currentModuleData) {
    throw new Error(`Module with ID ${moduleId} not found in modules.ts`);
  }

  const moduleScenarios = getScenariosByModuleId(moduleId);
  const storedCurrentScenario = getCurrentScenario(moduleId);
  const currentScenarioIndex = storedCurrentScenario ? storedCurrentScenario.scenarioId - 1 : 0;
  const currentScenarioData = moduleScenarios[currentScenarioIndex];

  useEffect(() => {
    if (!storedCurrentScenario && moduleScenarios.length > 0) {
      setCurrentScenarioStore(moduleId, moduleScenarios[0].id);
    }
  }, [moduleId, storedCurrentScenario, moduleScenarios, setCurrentScenarioStore]);

  const isRevealed = storedCurrentScenario?.isRevealed || false;
  const userRatings = storedCurrentScenario?.userRatings || {};

  const allRatingsComplete = currentScenarioData &&
    ['A', 'B', 'C'].every(responseId => {
      const rating = userRatings[responseId];
      return rating !== null && rating !== undefined && rating > 0;
    });

  const getTileScore = (): number => {
    const moduleData = pickUpAndPutDown[moduleId.toString()];
    if (moduleData && moduleData.completedScenarios.length > 0) {
      const totalScore = moduleData.completedScenarios.reduce((sum, scenario) => sum + scenario.score, 0);
      return totalScore / moduleData.completedScenarios.length;
    }
    return 0;
  };

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
    clearCurrentScenario(moduleId);
    const nextScenarioIndex = currentScenarioIndex + 1;
    if (nextScenarioIndex >= moduleScenarios.length) return;
    const nextScenarioId = moduleScenarios[nextScenarioIndex].id;
    setCurrentScenarioStore(moduleId, nextScenarioId);
  };

  return (
    <div className="scenarios-player-pane border-1 rounded-[10px] border-gray-700 h-full flex flex-col">
      <div className="scenarios-area-header border-b-1 p-1 border-gray-600 bg-black overflow-auto overflow-hidden text-white flex justify-between items-center">
        <div className="icon-container p-1 flex items-center gap-2">
          <div style={{ backgroundColor: '#dfd5dbff', borderRadius: '3px', padding: '5px' }}>
            <Image
              src={`/module-infographics/${String(currentModuleData.id)}.png`}
              alt={`Module ${currentModuleData.id} icon`}
              width={28}
              height={28}
            />
          </div>
          <h1 className="ml-1 text-base font-bold text-lilac-300">{currentModuleData.name}</h1>
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
        className="scenarios-container bg-[url('/scenarios-canvas.jpg')] bg-cover bg-center w-full flex-1 rounded-b-[10px] overflow-y-auto py-6 px-[200px] transition-opacity duration-300"
      >
        {hydrated && currentScenarioData ? (
          <ScenarioCard
            moduleId={moduleId}
            scenarioId={currentScenarioData.id}
            prompt={currentScenarioData.prompt}
            responses={currentScenarioData.responses.map(r => ({ id: r.id, text: r.text }))}
            expertRationales={isRevealed ? currentScenarioData.responses : undefined}
            totalScenarios={moduleScenarios.length}
          />
        ) : (
          <div className="flex justify-center items-center h-full text-white text-lg">
            {hydrated ? 'No scenarios available for this module.' : 'Loading...'}
          </div>
        )}
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
