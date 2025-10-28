// components/DesktopControlButton.tsx - SIMPLIFIED
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useLocalStore } from '@/store/useLocalStore';

export default function DesktopControlButton() {
  const { 
    currentModule, 
    pickUpAndPutDown, 
    revealScenario,
    triggerScenarioCompletion
  } = useLocalStore();
  
  // Read directly from store
  const currentScenario = pickUpAndPutDown[currentModule!]?.currentScenario;
  const userRankings = currentScenario?.userRankings || {};
  const expertRankings = currentScenario?.expertRankings || {};
  
  // Button visibility logic - THIS GUARANTEES NO NULLS!
  const allRated = ['A', 'B', 'C'].every(id => userRankings[id] != null);
  const isRevealed = currentScenario?.isRevealed || false;
  const isVisible = (allRated && !isRevealed) || isRevealed;

  // Handle Enter key
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && isVisible && currentModule) {
        event.preventDefault();
        handleButtonClick();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, currentModule]);

  const handleButtonClick = () => {
    if (!currentModule) return;
    
    if (!isRevealed) {
      // REVEAL: SAFE - allRated guarantees no nulls!
      const moduleId = parseInt(currentModule);
      console.log('🔄 DESKTOP BUTTON: Revealing scenario');
      revealScenario(moduleId, userRankings as { [responseId: string]: number }, expertRankings as { [responseId: string]: number });    } else {
      // NEXT: Just trigger navigation
      triggerScenarioCompletion();
    }
  };

  if (!currentScenario || !isVisible) {
    return null;
  }

  const buttonIcon = isRevealed ? '/next-icon.webp' : '/reveal-icon.webp';
  const buttonLabel = isRevealed ? 'Next scenario' : 'Reveal expert rankings';

  return (
    <div className="fixed bottom-9 right-12 z-50">
      <button
        onClick={handleButtonClick}
        className={`
          w-8 h-8 flex items-center justify-center select-none
          bg-lilac-200 rounded border border-lilac-charcoal-f
          transition-all duration-300 transform hover:scale-110
          ${!isRevealed ? 'animate-pulse-slow' : ''}
        `}
        aria-label={buttonLabel}
        title={buttonLabel}
      >
        <Image
          src={buttonIcon}
          alt={isRevealed ? 'Next' : 'Reveal'}
          width={20}
          height={20}
          className="w-5 h-5 object-contain"
        />
      </button>
    </div>
  );
}