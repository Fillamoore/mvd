// components/MobileScenariosPlayerFooter.tsx - SIMPLIFIED
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
  const showRevealButton = allRated && !isRevealed;
  const showNextButton = isRevealed && canGoNextScenario;

  return (
    <footer className="bg-white border-t border-gray-200 p-3 safe-area-padding-bottom">
      {/* Module and Scenario Info */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-gray-700">
          Module {currentModuleId}
        </span>
        <span className="text-sm text-gray-600">
          {currentScenarioIndex + 1} / {totalScenarios}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        {/* Master Screen Link */}
        <Link
          href="/mobile-master"
          className="flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
        >
          ← Master View
        </Link>

        {/* Action Buttons Group */}
        <div className="flex gap-2">
          {/* Reveal Button */}
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Image
                src="/reveal-icon.png"
                alt="Reveal Expert Rationales"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          )}

          {/* Next Scenario Button */}
          {showNextButton && (
            <button
              onClick={onNextScenario}
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}