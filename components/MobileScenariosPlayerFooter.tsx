'use client';

import Image from 'next/image';

interface MobileScenariosPlayerFooterProps {
  onReveal: () => void;
  onNextScenario: () => void;
  allRated: boolean;
  isRevealed: boolean;
  onSwitchToMaster: () => void;
}

export default function MobileScenariosPlayerFooter({
  onReveal,
  onNextScenario,
  allRated,
  isRevealed,
  onSwitchToMaster
}: MobileScenariosPlayerFooterProps) {
  const showRevealButton = allRated && !isRevealed;
  const showNextButton = isRevealed;

  return (
    <footer className="bg-black border-t border-gray-700 p-2 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        
        {/* MASTER BUTTON */}
        <button
          onClick={onSwitchToMaster}
          className="flex items-center justify-center p-3 rounded-lg select-none"
          title="Master View"
        >
          <Image
            src="/master-icon.webp"
            alt="Master View"
            width={24}
            height={24}
            className="w-6 h-6 invert"
          />
        </button>

        <div className="flex gap-3">
          {showRevealButton && (
            <button
              onClick={onReveal}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors select-none hover:bg-gray-800"
              title="Reveal"
            >
              <Image
                src="/reveal-icon.webp"
                alt="Reveal"
                width={24}
                height={24}
                className="w-6 h-6 invert"
              />
            </button>
          )}

          {showNextButton && (
            <button
              onClick={onNextScenario}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors select-none hover:bg-gray-800"
              title="Next"
            >
              <Image
                src="/next-icon.webp"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6 invert"
              />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
