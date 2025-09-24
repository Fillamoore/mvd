// components/MobileScenariosPlayerFooter.tsx - UPDATED NAVIGATION
'use client';

import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const showRevealButton = allRated && !isRevealed;
  const showNextButton = isRevealed;

  const handleModulesClick = () => {
    router.push('/mobile-master'); // Navigate to mobile master view
  };

  return (
    <footer className="bg-white border-t border-gray-200 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Modules Button */}
        <button
          onClick={handleModulesClick}
          className="flex items-center px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
        >
          ← Modules
        </button>

        <div className="flex gap-2">
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