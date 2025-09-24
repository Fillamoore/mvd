// components/MobileScenariosPlayerFooter.tsx - TRANSPARENT BUTTONS
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
        {/* Mobile Master View Icon - WHITE ON TRANSPARENT */}
        <button
          onClick={handleModulesClick}
          className="flex items-center justify-center p-3 rounded-lg bg-transparent hover:bg-gray-800 transition-colors"
          title="Master View"
        >
          <Image
            src="/mobile-master-icon.png"
            alt="Master View"
            width={24}
            height={24}
            className="w-6 h-6" // Should be white icon
          />
        </button>

        <div className="flex gap-3">
          {/* Mobile Reveal Icon - TRANSPARENT */}
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent hover:bg-gray-800 transition-colors"
              title="Reveal Expert Ratings"
            >
              <Image
                src="/mobile-reveal-icon.png"
                alt="Reveal"
                width={24}
                height={24}
                className="w-6 h-6" // Should be white icon
              />
            </button>
          )}

          {/* Mobile Next Scenario Icon - TRANSPARENT */}
          {showNextButton && (
            <button
              onClick={onNextScenario}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent hover:bg-gray-800 transition-colors"
              title="Next Scenario"
            >
              <Image
                src="/mobile-next-icon.png"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6" // Should be white icon
              />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}