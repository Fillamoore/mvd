// components/DesktopControlButton.tsx - KEEP THIS EXACT CODE
'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface DesktopControlButtonProps {
  onReveal: () => void;
  onNext: () => void;
  allRated: boolean;
  isRevealed: boolean;
}

export default function DesktopControlButton({
  onReveal,
  onNext,
  allRated,
  isRevealed
}: DesktopControlButtonProps) {
  // Handle keyboard shortcut (Enter key)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && allRated) {
        event.preventDefault();
        if (!isRevealed) {
          onReveal();
        } else {
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [allRated, isRevealed, onReveal, onNext]);

  // Only show the button if all ratings are complete OR we're revealed
  const isButtonVisible = (allRated && !isRevealed) || isRevealed;
  const buttonIcon = isRevealed ? '/next-icon.png' : '/reveal-icon.png';

  const handleClick = () => {
    if (isRevealed) {
      onNext();
    } else if (allRated) {
      onReveal();
    }
  };

  if (!isButtonVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`
          w-8 h-8 flex items-center justify-center  // 32x32px
          bg-lilac-200 rounded                   // lilac-200 background, slightly rounded
          border border-lilac-charcoal-f            // lilac-charcoal-f border
          transition-all duration-300 transform hover:scale-110
          ${!isRevealed ? 'animate-pulse-slow' : ''}  // Much slower pulse for reveal
        `}
        aria-label={isRevealed ? 'Next scenario' : 'Reveal expert ratings'}
        title={isRevealed ? 'Next scenario' : 'Reveal expert ratings'}
      >
        <Image
          src={buttonIcon}
          alt={isRevealed ? 'Next' : 'Reveal'}
          width={20}
          height={20}
          className="w-5 h-5 object-contain"  // Slightly smaller icon for 32x32 button
        />
      </button>
    </div>
  );
}