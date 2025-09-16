// components/MobileScenariosPlayerFooter.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface MobileScenariosPlayerFooterProps {
  onReveal: () => void;
  onNextScenario: () => void;
  currentModuleId: number;
  currentScenarioIndex: number;
  totalScenarios: number;
  allRated: boolean;
  isRevealed: boolean;
  onModuleChange?: (moduleId: number) => void;
}

export default function MobileScenariosPlayerFooter({
  onReveal,
  onNextScenario,
  currentModuleId,
  currentScenarioIndex,
  totalScenarios,
  allRated,
  isRevealed
}: MobileScenariosPlayerFooterProps) {

  const canGoNextScenario = currentScenarioIndex < totalScenarios - 1;

  return (
    <footer className="bg-white border-t border-gray-200 p-3">
      {/* Top Row: Module Navigation */}
      <div className="flex justify-between items-center mb-4">

        {/* Current Module Info */}
        <span className="text-sm font-medium text-gray-700">
          Module {currentModuleId}
        </span>

      </div>

      {/* Middle Row: Scenario Navigation and Reveal */}
      <div className="flex justify-between items-center mb-4">

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
            src="/reveal-icon.png"
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
          ←
        </Link>
      </div>
    </footer>
  );
}