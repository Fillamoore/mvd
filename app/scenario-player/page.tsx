// app/scenario-player/page.tsx - FIXED
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ScenarioCard from '../../components/ScenarioCard';
import MobileScenariosPlayerFooter from '../../components/MobileScenariosPlayerFooter';
import DesktopScenariosPlayerFooter from '../../components/DesktopScenariosPlayerFooter';
import { scenarios } from '../../data/scenarios';
import { modules, getModuleById } from '../../data/modules';
import { useScenariosProgressLocalStore } from '../../store/useScenariosProgressLocalStore';

export default function ScenarioPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const moduleId = parseInt(searchParams.get('module') || '1');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const currentModule = getModuleById(moduleId);
  const moduleScenarios = scenarios.filter(scenario => scenario.moduleId === moduleId);
  const currentScenario = moduleScenarios[currentScenarioIndex];
  
  const ratings = useScenariosProgressLocalStore((state) => state.ratings);
  const scenarioRatings = ratings[currentScenario?.id] || {};
  const allRated = Object.values(scenarioRatings).every(rating => rating?.value !== null);

  const handleReveal = () => {
    if (allRated) {
      setIsRevealed(true);
    }
  };

  const handlePreviousModule = () => {
    if (moduleId > 1) {
      router.push(`/scenario-player?module=${moduleId - 1}`);
    }
  };

  const handleNextModule = () => {
    if (moduleId < 49) {
      router.push(`/scenario-player?module=${moduleId + 1}`);
    }
  };

  const handleSkipScenario = () => {
    if (currentScenarioIndex < moduleScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setIsRevealed(false);
    }
  };

  const handlePreviousScenario = () => {
    if (currentScenarioIndex > 0) {
      setCurrentScenarioIndex(prev => prev - 1);
      setIsRevealed(false);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < moduleScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setIsRevealed(false);
    }
  };

  useEffect(() => {
    setCurrentScenarioIndex(0);
    setIsRevealed(false);
  }, [moduleId]);

  if (!currentModule || !currentScenario) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-gray-500">Loading scenario...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Module Header */}
      <div className="p-6 pb-0">
        <h1 className="text-2xl font-bold text-gray-900">{currentModule.name}</h1>
        <p className="text-gray-600 mt-1">{currentModule.description}</p>
        <div className="mt-2 text-sm text-gray-500">
          Module {moduleId} • {moduleScenarios.length} scenario{moduleScenarios.length !== 1 ? 's' : ''} {/* FIXED: moduleId instead of currentModuleId */}
        </div>
      </div>

      {/* Scenario Content */}
      <div className="flex-1 overflow-auto p-6">
        <ScenarioCard
          scenarioId={currentScenario.id}
          prompt={currentScenario.prompt}
          responses={currentScenario.responses}
          expertRationales={isRevealed ? currentScenario.responses : undefined}
          isRevealed={isRevealed}
        />
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden">
        <MobileScenariosPlayerFooter
          onReveal={handleReveal}
          onPreviousModule={handlePreviousModule}
          onNextModule={handleNextModule}
          onSkipScenario={handleSkipScenario}
          onPreviousScenario={handlePreviousScenario}
          onNextScenario={handleNextScenario}
          currentModuleId={moduleId}
          currentScenarioIndex={currentScenarioIndex}
          totalScenarios={moduleScenarios.length}
          allRated={allRated}
          isRevealed={isRevealed}
        />
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <DesktopScenariosPlayerFooter
          onReveal={handleReveal}
          onPreviousModule={handlePreviousModule}
          onNextModule={handleNextModule}
          onSkipScenario={handleSkipScenario}
          onPreviousScenario={handlePreviousScenario}
          onNextScenario={handleNextScenario}
          currentModuleId={moduleId} 
          currentScenarioIndex={currentScenarioIndex}
          totalScenarios={moduleScenarios.length}
          allRated={allRated}
          isRevealed={isRevealed}
        />
      </div>
    </div>
  );
}