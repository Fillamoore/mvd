// components/DesktopScenariosPlayerFooter.tsx
'use client';

import Image from 'next/image';

interface DesktopScenariosPlayerFooterProps {
  onReveal: () => void;
  onNextScenario: () => void;
  currentModuleId: number;
  currentScenarioIndex: number;
  totalScenarios: number;
  allRated: boolean;
  isRevealed: boolean;
  onModuleChange?: (moduleId: number) => void;
}

export default function DesktopScenariosPlayerFooter({
  onReveal,
  onNextScenario,
  currentModuleId,
  currentScenarioIndex,
  totalScenarios,
  allRated,
  isRevealed
}: DesktopScenariosPlayerFooterProps) {
  const canGoNextScenario = currentScenarioIndex < totalScenarios - 1;

  console.log("In DesktopScenariosPlayerFooter!");

  return (

    <div className="bg-black border-t border-gray-200 p-4 flex justify-between items-center">

      {/* Left: Module Navigation */}
      <div className="flex items-center space-x-2">
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
            src="/reveal-icon.png"
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