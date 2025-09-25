// components/MobileScenariosPlayerFooter.tsx - LINK VERSION
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
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Mobile Master View Icon - NOW A LINK */}
        <Link
          href="/mobile-master"
          className="flex items-center justify-center p-3 rounded-lg bg-transparent hover:bg-gray-800 transition-colors"
          title="Master View"
          style={{ WebkitTapHighlightColor: 'transparent' }} 
        >
          <Image
            src="/mobile-master-icon.png"
            alt="Master View"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>

        <div className="flex gap-3">
          {/* Mobile Reveal Icon - ACTION BUTTON (can't be Link) */}
          {showRevealButton && (
            <div
              onClick={onReveal}
              role="button"
              tabIndex={0}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors cursor-pointer"
              title="Reveal Expert Ratings"
            >
              <Image
                src="/mobile-reveal-icon.png"
                alt="Reveal"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          )}

          {/* Mobile Next Scenario Icon - ACTION BUTTON (can't be Link) */}
          {showNextButton && (
            <div
              onClick={onNextScenario}
              role="button"
              tabIndex={0}
              className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors cursor-pointer"
              title="Next Scenario"
            >
              <Image
                src="/mobile-next-icon.png"
                alt="Next"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}