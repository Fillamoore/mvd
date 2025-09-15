// components/MobileFooter.tsx - UPDATED WITH CUSTOM ICON
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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

        {/* Scenario Player Icon - UPDATED WITH CUSTOM IMAGE */}
        <Link
          href="/scenario-player"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            pathname === '/scenario-player' 
              ? 'text-indigo-600 bg-indigo-50' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden">
            <Image
              src="/scenario-player-icon.png"
              alt="Scenario Player"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
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
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />         

        </Link>
      </div>
    </footer>
  );
}