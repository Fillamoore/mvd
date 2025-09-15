// components/MobileFooter.tsx - UPDATED WITH REVEAL BUTTON
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MobileFooterProps {
  onReveal?: () => void;
  revealDisabled?: boolean;
  isRevealed?: boolean;
}

export default function MobileFooter({ 
  onReal, 
  revealDisabled = false, 
  isRevealed = false 
}: MobileFooterProps) {
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
          <Image
            src="/master-icon.png"
            alt="Master Screen"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Reveal Button for Mobile */}
        <button
          onClick={onReveal}
          disabled={revealDisabled}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            isRevealed
              ? 'text-green-600 bg-green-50'
              : revealDisabled
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <span className="text-sm font-medium">
            {isRevealed ? 'Revealed' : 'Reveal'}
          </span>
        </button>

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