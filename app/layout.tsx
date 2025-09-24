// components/MobileScenariosPlayerFooter.tsx - MOBILE-SPECIFIC ICONS
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
    router.push('/mobile-master', { scroll: false });
  };

  return (
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Mobile Master View Icon */}
        <button
          onClick={handleModulesClick}
          className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          title="Master View"
        >
          <Image
            src="/mobile-master-icon.png"
            alt="Master View"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>

        <div className="flex gap-3">
          {/* Mobile Reveal Icon */}
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              title="Reveal Expert Ratings"
            >
              <Image
                src="/mobile-reveal-icon.png"
                alt="Reveal"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          )}

          {/* Mobile Next Scenario Icon */}
          {showNextButton && (
            <button
              onClick={onNextScenario}
              className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              title="Next Scenario"
            >
              <Image
                src="/mobile-next-icon.png"
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