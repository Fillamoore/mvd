// components/MobileMasterViewMenu.tsx
'use client';

import Link from 'next/link';
import { useLocalStore } from '@/store/useLocalStore';

export default function MobileMasterViewMenu() {
  const { currentModule } = useLocalStore();
  const moduleId = currentModule ? parseInt(currentModule, 10) : 1;

  return (
    <footer className="bg-white border-t border-gray-200 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">
        {/* Current Module Info */}
        <div className="text-sm">
          <span className="font-medium text-gray-700">Module {moduleId}</span>
        </div>

        {/* Back to Scenarios Button */}
        <Link
          href="/scenario-player"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded"
        >
          Start Scenarios
          <span className="text-lg">→</span>
        </Link>
      </div>
    </footer>
  );
}