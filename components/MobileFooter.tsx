// components/MobileFooter.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileFooter() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
      <div className="flex justify-around items-center">
        {/* Master View Icon */}
        <Link
          href="/modules"
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            pathname === '/modules' 
              ? 'text-indigo-600 bg-indigo-50' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-xs mt-1">Master</span>
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