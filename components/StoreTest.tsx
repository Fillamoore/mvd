// components/StoreTest.tsx
'use client';

import { useEffect, useState } from 'react';
import { useLocalStore } from '@/store/useLocalStore';

export default function StoreTest() {
  const [isHydrated, setIsHydrated] = useState(false);
  const { pickUpAndPutDown, rateScenario, setCurrentScenario } = useLocalStore();

  // Wait for store hydration
  useEffect(() => {
    const unsubscribe = useLocalStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
      console.log('✅ Store hydrated');
    });
    
    if (useLocalStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }
    
    return unsubscribe;
  }, []);

  const testRating = () => {
    setCurrentScenario(1, 1);
    rateScenario(1, 1, 'A', 3);
    console.log('Test rating set');
  };

  const checkStorage = () => {
    const stored = localStorage.getItem('pick-up-and-put-down-storage');
    console.log('Storage:', stored ? JSON.parse(stored) : 'Empty');
  };

  const clearStorage = () => {
    localStorage.removeItem('pick-up-and-put-down-storage');
    console.log('Storage cleared');
    window.location.reload();
  };

  if (!isHydrated) {
    return (
      <div className="p-4 border rounded bg-gray-100">
        <h3 className="font-bold mb-2">Store Test - Loading...</h3>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-gray-100 mb-4">
      <h3 className="font-bold mb-2">Store Test</h3>
      
      <div className="mb-2">
        <strong>Current Store:</strong>
        <pre className="text-xs bg-white p-2 mt-1 overflow-auto max-h-32">
          {JSON.stringify(pickUpAndPutDown, null, 2)}
        </pre>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={testRating} className="px-3 py-1 bg-blue-500 text-white rounded">
          Set Test Rating
        </button>
        <button onClick={checkStorage} className="px-3 py-1 bg-green-500 text-white rounded">
          Check Storage
        </button>
        <button onClick={clearStorage} className="px-3 py-1 bg-red-500 text-white rounded">
          Clear Storage
        </button>
      </div>
    </div>
  );
}