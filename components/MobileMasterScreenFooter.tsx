// components/MobileMasterScreenFooter.tsx
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-black border-t border-gray-700 px-3 py-2">
      <div className="flex justify-around items-center h-10">

        {/* Scenario Player Icon */}
        <Link
          href='/scenario-player'
          className="flex items-center justify-center p-2 rounded-lg bg-transparent text-white cursor-pointer"
          title="Scenario Player"
        >
          <Image
            src="/mobile-back-icon.png"
            alt="Scenario Player"
            width={24}
            height={24}
            className="object-contain"
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