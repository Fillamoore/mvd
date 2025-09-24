// components/MobileScenariosPlayerFooter.tsx - BLACK BACKGROUND WITH ICONS
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
    // DIRECT navigation without splash screen
    router.push('/mobile-master', { scroll: false });
  };

  const handleNextClick = () => {
    onNextScenario();
  };

  return (
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Master View Icon */}
        <button
          onClick={handleModulesClick}
          className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          title="Master View"
        >
          <Image
            src="/master-icon.png"
            alt="Master View"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>

        <div className="flex gap-3">
          {/* Reveal Icon */}
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="flex items-center justify-center p-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
              title="Reveal Expert Ratings"
            >
              <Image
                src="/reveal-icon.png"
                alt="Reveal"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          )}

          {/* Next Scenario Icon */}
          {showNextButton && (
            <button
              onClick={handleNextClick}
              className="flex items-center justify-center p-3 rounded-lg bg-green-600 hover:bg-green-500 transition-colors"
              title="Next Scenario"
            >
              <Image
                src="/next-icon.png"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}