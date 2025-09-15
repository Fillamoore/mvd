'use client';

import { useState, useEffect } from 'react';
import ScenarioCard from '@/components/ScenarioCard';
import { sampleScenario } from '@/data/sampleScenario';
import { useScenariosProgressLocalStore } from '@/store/useScenariosProgressLocalStore';
import MobileFooter from '@/components/MobileFooter';

export default function ScenarioPlayerPage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const ratings = useScenariosProgressLocalStore((state) => state.ratings[sampleScenario.id]);
  const resetScenario = useScenariosProgressLocalStore((state) => state.resetScenario);

  const calculateScore = () => {
    if (!ratings) return 0;
    
    let totalScore = 0;
    let totalResponses = 0;

    sampleScenario.responses.forEach(response => {
      const userRating = ratings[response.id]?.value;
      if (userRating !== null && userRating !== undefined) {
        const accuracy = 1 - (Math.abs(response.expertRating - userRating) / 4);
        totalScore += accuracy;
        totalResponses++;
      }
    });

    return totalResponses > 0 ? (totalScore / totalResponses) : 0;
  };

  const handleReveal = () => {
    setIsRevealed(true);
    // Delay score appearance until after rationale animation completes
    setTimeout(() => setShowScore(true), 400);
  };

  const handleReset = () => {
    setIsRevealed(false);
    setShowScore(false);
    resetScenario(sampleScenario.id);
  };

  const allRated = ratings && Object.values(ratings).every(rating => 
    rating?.value !== null && rating?.value !== undefined
  );

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto pb-16 md:pb-0"> {/* Padding for mobile footer */}
        
        {/* Scenario Card */}
        <div className="mb-8">
          <ScenarioCard 
            scenarioId={sampleScenario.id}
            prompt={sampleScenario.prompt}
            responses={sampleScenario.responses.map(r => ({ id: r.id, text: r.text }))}
            expertRationales={isRevealed ? sampleScenario.responses : undefined}
            readonly={isRevealed}
          />
        </div>

        {/* Score Box - Fades in after rationale animation */}
        {showScore && (
          <div className="flex justify-end mb-8">
            <div className="bg-lilac-100 border-lilac-300 rounded-lg border p-4 
                          max-w-[90%] md:max-w-[80%] lg:max-w-[60%] animate-fadeIn">
              <div className="text-xl font-bold text-gray-900 text-right">
                {score.toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              disabled={!allRated}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium
                       hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed
                       transition-colors duration-200"
            >
              Reveal
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium
                       hover:bg-gray-700 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
        </div>

        {/* Mobile Footer for Scenario Player */}
        <div className="md:hidden fixed bottom-0 left-0 right-0">
          <MobileFooter />
        </div>

      </div>
    </div>
  );
}