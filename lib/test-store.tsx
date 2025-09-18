// lib/test-store.tsx - .tsx file with JSX
'use client';

import { useLocalStore } from '@/store/useLocalStore';

export function TestStore() {
  const { 
    ratings, 
    setRating, 
    setRevealed, 
    recordPerformanceEvent,
    performanceEvents 
  } = useLocalStore();

  const testScenario = () => {
    // Test basic rating setting
    setRating(1, 1, 'A', 3);
    setRating(1, 1, 'B', 4);
    setRating(1, 1, 'C', 5);
    
    // Test revealed state
    setRevealed(1, 1, true);
    
    // Test performance event
    recordPerformanceEvent(1, 1, { A: 3, B: 4, C: 5 }, { A: 4, B: 5, C: 3 });
    
    console.log('Store test completed!');
    console.log('Ratings:', ratings);
    console.log('Performance Events:', performanceEvents);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={testScenario}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Store
      </button>
    </div>
  );
}