// components/MobileMasterScreenFooter.tsx
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MobileMasterScreenFooter() {
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer className="bg-black border-t border-gray-700 px-3 py-2">
      <div className="flex justify-around items-center h-10">
        {/* Master View Icon */}
        <div
          onClick={() => navigateTo('/mobile-master')}
          className="flex items-center justify-center p-2 rounded-lg bg-transparent text-white cursor-pointer"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          title="Master View"
        >
          <Image
            src="/master-icon.png"
            alt="Master Screen"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Scenario Player Icon */}
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

        {/* Settings Icon */}
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
      </div>
    </footer>
  );
}