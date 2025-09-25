// components/MobileMasterScreenFooter.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-white border-t border-gray-200 px-3 pb-3">
      <div className="flex justify-around items-center">
        {/* Master View Icon - ACTIVE */}
        <Link
          href="/mobile-master"
          className="flex flex-col items-center p-2 rounded-lg text-indigo-600 bg-indigo-50"
        >
          <Image
            src="/master-icon.png"
            alt="Master Screen"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Scenario Player Icon - INACTIVE */}
        <Link
          href="/scenario-player?module=1"
          className="flex flex-col items-center p-2 rounded-lg text-gray-600 hover:text-indigo-600"
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
        </Link>

        {/* Settings Icon */}
        <Link
          href="/settings"
          className="flex flex-col items-center p-2 rounded-lg text-gray-600 hover:text-indigo-600"
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