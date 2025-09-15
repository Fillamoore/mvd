// components/MobileFooter.tsx - VERIFY THIS EXISTS
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-white border-t border-gray-200 p-3">
      <div className="flex justify-around items-center">
        {/* Master View Icon */}
        <Link
          href="/mobile-master"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            pathname === '/mobile-master' 
              ? 'text-indigo-600 bg-indigo-50' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-xs mt-1">Master</span>
        </Link>

        {/* Scenario Player Icon */}
        <Link
          href="/scenario-player"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            pathname === '/scenario-player' 
              ? 'text-indigo-600 bg-indigo-50' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
            <span className="text-white text-xs">🎮</span>
          </div>
          <span className="text-xs mt-1">Player</span>
        </Link>

        {/* Settings Icon */}
        <Link
          href="/settings"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            pathname === '/settings' 
              ? 'text-indigo-600 bg-indigo-50' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
            <span className="text-white text-xs">⚙️</span>
          </div>
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </footer>
  );
}