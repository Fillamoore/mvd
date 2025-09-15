// components/DesktopScenariosPlayerFooter.tsx
'use client';

import Image from 'next/image';

interface DesktopScenariosPlayerFooterProps {
  onReveal: () => void;
  onPreviousModule: () => void;
  onNextModule: () => void;
  onSkipScenario: () => void;
  onPreviousScenario: () => void;
  onNextScenario: () => void;
  currentModuleId: number;
  currentScenarioIndex: number;
  totalScenarios: number;
  allRated: boolean;
  isRevealed: boolean;
}

export default function DesktopScenariosPlayerFooter({
  onReveal,
  onPreviousModule,
  onNextModule,
  onSkipScenario,
  onPreviousScenario,
  onNextScenario,
  currentModuleId,
  currentScenarioIndex,
  totalScenarios,
  allRated,
  isRevealed
}: DesktopScenariosPlayerFooterProps) {
  const canGoPreviousModule = currentModuleId > 1;
  const canGoNextModule = currentModuleId < 49;
  const canSkipScenario = currentScenarioIndex < totalScenarios - 1;
  const canGoPreviousScenario = currentScenarioIndex > 0;
  const canGoNextScenario = currentScenarioIndex < totalScenarios - 1;

  return (
    <div className="bg-white border-t border-gray-200 p-4 flex justify-between items-center">
      {/* Left: Module Navigation */}
      <div className="flex items-center space-x-2">
        {/* Previous Module */}
        <button 
          onClick={onPreviousModule}
          disabled={!canGoPreviousModule}
          className={`p-2 rounded ${
            canGoPreviousModule 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title="Previous Module"
        >
          <Image
            src="/prev-module.png"
            alt="Previous Module"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>

        {/* Module Info */}
        <span className="text-sm font-medium text-gray-700 mx-2">
          Module {currentModuleId}
        </span>

        {/* Next Module */}
        <button 
          onClick={onNextModule}
          disabled={!canGoNextModule}
          className={`p-2 rounded ${
            canGoNextModule 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title="Next Module"
        >
          <Image
            src="/next-module.png"
            alt="Next Module"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 mx-2" />

        {/* Scenario Navigation */}
        <button 
          onClick={onPreviousScenario}
          disabled={!canGoPreviousScenario}
          className={`px-3 py-1 rounded ${
            canGoPreviousScenario 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title="Previous Scenario"
        >
          〈
        </button>

        <span className="text-sm text-gray-600 mx-2">
          Scenario {currentScenarioIndex + 1} of {totalScenarios}
        </span>

        <button 
          onClick={onNextScenario}
          disabled={!canGoNextScenario}
          className={`px-3 py-1 rounded ${
            canGoNextScenario 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title="Next Scenario"
        >
          〉
        </button>

        {/* Skip Scenario */}
        <button 
          onClick={onSkipScenario}
          disabled={!canSkipScenario}
          className={`p-2 rounded ml-2 ${
            canSkipScenario 
              ? 'bg-orange-200 hover:bg-orange-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          title="Skip Scenario"
        >
          <Image
            src="/skip-scenario.png"
            alt="Skip Scenario"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Right: Reveal Button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onReveal}
          disabled={!allRated || isRevealed}
          className={`px-6 py-2 rounded font-medium flex items-center space-x-2 ${
            allRated && !isRevealed
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Image
            src="/reveal.png"
            alt="Reveal"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span>{isRevealed ? 'Revealed' : 'Reveal'}</span>
        </button>
      </div>
    </div>
  );
}