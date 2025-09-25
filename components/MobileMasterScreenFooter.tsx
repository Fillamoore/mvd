// components/MobileMasterScreenFooter.tsx
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-between items-center">

        <Link
          href='/scenario-player'
          className="border border-red-500 flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors select-none"
          title="Scenario Player"
        >
          <Image
            src="/mobile-back-icon.png"
            alt="Scenario Player"
            width={24}
            height={24}
            className="object-contain bg-transparent"
          />
        </Link>

{/*
        <div
          onClick={() => navigateTo('/mobile-master')}
          className="flex items-center justify-center p-2 rounded-lg bg-transparent text-gray-400 cursor-pointer"
          title="Scenario Player"
        >
          <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden">
            <Image
              src="/scenario-player-icon.png"
              alt="Scenario Player"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </div>

        <div
          onClick={() => navigateTo('/settings')}
          className="flex items-center justify-center p-2 rounded-lg bg-transparent text-gray-400 cursor-pointer"
          title="Settings"
        >
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
*/}     
      </div>
    </footer>
  );
}