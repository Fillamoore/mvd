// components/MobileScenariosPlayerFooter.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface MobileScenariosPlayerFooterProps {
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

export default function MobileScenariosPlayerFooter({
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
}: MobileScenariosPlayerFooterProps) {
  const canGoPreviousModule = currentModuleId > 1;
  const canGoNextModule = currentModuleId < 49;
  const canSkipScenario = currentScenarioIndex < totalScenarios - 1;
  const canGoPreviousScenario = currentScenarioIndex > 0;
  const canGoNextScenario = currentScenarioIndex < totalScenarios - 1;

  return (
    <footer className="bg-white border-t border-gray-200 p-3">
      {/* Top Row: Module Navigation */}
      <div className="flex justify-between items-center mb-4">
        {/* Previous Module */}
        <button 
          onClick={onPreviousModule}
          disabled={!canGoPreviousModule}
          className={`p-2 rounded ${
            canGoPreviousModule 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Image
            src="/prev-module.png"
            alt="Previous Module"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>

        {/* Current Module Info */}
        <span className="text-sm font-medium text-gray-700">
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
        >
          <Image
            src="/next-module.png"
            alt="Next Module"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Middle Row: Scenario Navigation and Reveal */}
      <div className="flex justify-between items-center mb-4">
        {/* Previous Scenario */}
        <button 
          onClick={onPreviousScenario}
          disabled={!canGoPreviousScenario}
          className={`px-3 py-2 rounded ${
            canGoPreviousScenario 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          〈
        </button>

        {/* Scenario Progress */}
        <span className="text-sm text-gray-600">
          {currentScenarioIndex + 1} / {totalScenarios}
        </span>

        {/* Next Scenario */}
        <button 
          onClick={onNextScenario}
          disabled={!canGoNextScenario}
          className={`px-3 py-2 rounded ${
            canGoNextScenario 
              ? 'bg-gray-200 hover:bg-gray-300' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
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
        >
          <Image
            src="/skip-scenario.png"
            alt="Skip Scenario"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>

        {/* Reveal */}
        <button
          onClick={onReveal}
          disabled={!allRated || isRevealed}
          className={`p-2 rounded ml-2 ${
            allRated && !isRevealed
              ? 'bg-blue-200 hover:bg-blue-300'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Image
            src="/reveal.png"
            alt="Reveal Expert Rationales"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Bottom Row: Master Screen Navigation */}
      <div className="flex justify-center items-center pt-2 border-t border-gray-100">
        <Link
          href="/mobile-master"
          className="flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
        >
          ← Back to Modules
        </Link>
      </div>
    </footer>
  );
}