// components/MobileMasterScreenFooter.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-black border-t border-gray-500 px-3 pb-2"> 
      <div className="flex justify-around items-center h-10"> 
        {/* Master View Icon - ACTIVE */}
        <Link
          href="/mobile-master"
          className="flex items-center justify-center p-2 rounded-lg text-white" 
        >
          <Image
            src="/master-icon.png"
            alt="Master Screen"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        {/* Scenario Player Icon - INACTIVE */}
        <Link
          href="/scenario-player?module=1"
          className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white"
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
        </Link>

        {/* Settings Icon */}
        <Link
          href="/settings"
          className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white" 
        >
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
            className="object-contain"
          />         
        </Link>
      </div>
    </footer>
  );
}