// components/MobileScenariosPlayerFooter.tsx - SIMPLIFIED VERSION
'use client';

import Link from 'next/link';
import Image from 'next/image';

interface MobileScenariosPlayerFooterProps {
  onReveal: () => void;
  onNextScenario: () => void;
  allRated: boolean;
  isRevealed: boolean;
}

export default function MobileScenariosPlayerFooter({
  onReveal,
  onNextScenario,
  allRated,
  isRevealed
}: MobileScenariosPlayerFooterProps) {

  const showRevealButton = allRated && !isRevealed;
  const showNextButton = isRevealed;

  return (
    <footer className="bg-white border-t border-gray-200 p-3 safe-area-padding-bottom">
      {/* Action Buttons Only */}
      <div className="flex justify-between items-center">
        {/* Master Screen Link - Fixed navigation */}
        <Link
          href="/"  // This should navigate to your master view
          className="flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
        >
          ← Modules
        </Link>

        {/* Action Buttons Group */}
        <div className="flex gap-2">
          {/* Reveal Button */}
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="flex items-center gap-2 px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium"
            >
              <Image
                src="/reveal-icon.png"
                alt="Reveal"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              Reveal
            </button>
          )}

          {/* Next Scenario Button */}
          {showNextButton && (
            <button
              onClick={onNextScenario}
              className="flex items-center gap-2 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white text-sm font-medium"
            >
              Next
              <span className="text-lg">→</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}