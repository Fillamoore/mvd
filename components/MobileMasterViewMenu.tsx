// components/MobileMasterViewMenu.tsx - FIX DOUBLE-TAP
'use client';

import { useRouter } from 'next/navigation';
import { useLocalStore } from '@/store/useLocalStore';

export default function MobileMasterViewMenu() {
  const router = useRouter();
  const { currentModule } = useLocalStore();
  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;

  const handleStartScenarios = () => {
    router.push('/scenario-player');
    // Force immediate navigation
    setTimeout(() => {
      window.location.href = '/scenario-player';
    }, 100);
  };

  return (
    <footer className="bg-white border-t border-gray-200 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Current Module Info */}
        <div className="text-sm">
          <span className="font-medium text-gray-700">Module {moduleId}</span>
        </div>

        {/* Start Scenarios Button - FIXED NAVIGATION */}
        <button
          onClick={handleStartScenarios}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded active:bg-blue-700"
        >
          Start Scenarios
          <span className="text-lg">→</span>
        </button>
      </div>
    </footer>
  );
}