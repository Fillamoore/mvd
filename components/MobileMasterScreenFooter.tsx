// components/MobileMasterScreenFooter.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();
          {/*} style={{ WebkitTapHighlightColor: 'transparent' }} */}

  return (
    <footer className="bg-black border-t border-gray-700 p-3">
      <div className="flex justify-between items-center h-10">
        {/* Master View Icon - ACTIVE */}
        <div
          {/*href="/scenario-player" */}
          onClick={() => window.location.href = '/scenario-player'}
          className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors select-none"
          title="scenarios screen"
        >
          <Image
            src="/mobile-back-icon.png"
            alt="Master Screen"
            width={24}
            height={24}
            className="w6 h6"
          />
        </div>

        {/* 
        <Link
          href="/scenario-player?module=1"
          className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white active:bg-transparent" 
          style={{ WebkitTapHighlightColor: 'transparent' }} 
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

        
        <Link
          href="/settings"
          className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white active:bg-transparent" 
          style={{ WebkitTapHighlightColor: 'transparent' }} 
        >
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
            className="object-contain"
          />         
        </Link>
        */}
      </div>
    </footer>
  );
}