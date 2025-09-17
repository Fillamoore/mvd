// app/scenario-player/page.tsx - COMPLETE AND CORRECTED
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ScenarioCard from '../../components/ScenarioCard';
import ScenarioFooter from '../../components/DesktopScenariosPlayerFooter'; 
import { getScenariosByModuleId } from '../../data/scenarios'; 
import { getModuleById } from '../../data/modules';
import { useScenariosProgressLocalStore } from '../../store/useScenariosProgressLocalStore';
import { getScenarioUniqueId } from '@/data/scenarios'; 
import Image from 'next/image';

export default function ScenarioPlayer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const moduleId = parseInt(searchParams.get('module') || '1');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const currentModule = getModuleById(moduleId);
  if (!currentModule) {
    throw new Error(`Module with ID ${moduleId} not found in modules.ts`);
  }

  const moduleScenarios = getScenariosByModuleId(moduleId);
  const currentScenario = moduleScenarios[currentScenarioIndex];
  
  const ratings = useScenariosProgressLocalStore((state) => state.ratings);
  const setCurrentScenarioIndexStore = useScenariosProgressLocalStore((state) => state.setCurrentScenarioIndex);
  
  // Generate unique scenario ID for store lookup
  const uniqueScenarioId = currentScenario ? getScenarioUniqueId(moduleId, currentScenario.id) : '';
  const scenarioRatings = ratings[uniqueScenarioId] || {};
  
  // VALIDATION: ALL RATINGS MUST BE COMPLETE FOR REVEAL
  const allRatingsComplete = Object.values(scenarioRatings).every(rating => 
    rating?.value !== null && rating?.value !== undefined && rating.value > 0
  );

  const handleReveal = () => {
    if (allRatingsComplete) {
      setIsRevealed(true);
    }
  };

  const handleNextScenario = () => {
    if (currentScenarioIndex < moduleScenarios.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
      setCurrentScenarioIndexStore(currentScenarioIndex + 1);
      setIsRevealed(false);
    } else {
      // Optionally handle end of module
      console.log('End of module reached');
    }
  };

  const handleModuleChange = (newModuleId: number) => {
    router.push(`/scenario-player?module=${newModuleId}`);
    setCurrentScenarioIndex(0);
    setCurrentScenarioIndexStore(0);
    setIsRevealed(false);
  };

  // Reset reveal state when scenario changes
  useEffect(() => {
    setIsRevealed(false);
  }, [currentScenarioIndex, moduleId]);

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
    <div className="h-full flex flex-col">
      {/* Module Header */}
     <div className="scenarios-area-header p-2 bg-black text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div style={{ backgroundColor: '#dfd5dbff', borderRadius: '3px', padding: '3px' }}>
            <Image
              src={`/module-infographics/${String(currentModule.id)}.png`}
              alt={`Module ${module.id} icon`}
              width={32}
              height={32}
              className="w-6 h-6 object-contain"
            /> 
          </div>        
          <h1 className="ml-1 text-sm font-bold text-lilac-300">{currentModule.name}</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center text-sm text-lilac-300 border-2 border-lilac-300 rounded-md px-1.5 py-1 min-w-[2.5rem]">
  {currentScenarioIndex + 1}/{moduleScenarios.length}
</div>
          <div className = "bg-black rounded-md p-1">

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
      <div className="flex-1 overflow-auto p-6">
        <ScenarioCard
          moduleId={moduleId}
          scenarioId={currentScenario.id}
          prompt={currentScenario.prompt}
          responses={currentScenario.responses.map(r => ({ id: r.id, text: r.text }))}
          expertRationales={isRevealed ? currentScenario.responses : undefined}
          isRevealed={isRevealed}
        />
      </div>

      {/* PROPER SCENARIO FOOTER */}
      <ScenarioFooter
        onReveal={handleReveal}
        onNextScenario={handleNextScenario}
        currentModuleId={moduleId}
        currentScenarioIndex={currentScenarioIndex}
        totalScenarios={moduleScenarios.length}
        allRated={allRatingsComplete}
        isRevealed={isRevealed}
        onModuleChange={handleModuleChange} 
      />
    </div>
  );
}