// components/DesktopMenu.tsx - UPDATE IF NEEDED
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <aside className="w-10 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">

      {/* Settings Icon */}
      <Image
        src="/aaicon.ico"
        alt="Advisory Accelerator Icon"
        width={24}
        height={24}
        className="object-contain"
      />  
      
      {/* Spacer to push settings icon down */}
      <div className="mt-auto" />

      {/* Settings Icon */}
      <Link
          href="/settings"
          className={`rounded-lg transition-colors mb-4 flex items-center justify-center w-12 h-12 ${
            pathname === '/settings' 
              ? 'bg-indigo-100 text-indigo-600' 
              : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
          }`}
          title="Settings">
          <Image
            src="/settings-icon.png"
            alt="Settings"
            width={24}
            height={24}
            className="object-contain"
          />  
      </Link>

    </aside>
  );
}