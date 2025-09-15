// components/DesktopMenu.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <aside className="w-20 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4">
      {/* Settings Icon */}
      <Link
        href="/settings"
        className={`p-3 rounded-lg transition-colors mb-4 ${
          pathname === '/settings' 
            ? 'bg-indigo-100 text-indigo-600' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
        }`}
        title="Settings"
      >
        <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
          <span className="text-white text-sm">⚙️</span>
        </div>
      </Link>

      {/* Separator */}
      <div className="w-8 h-px bg-gray-300 my-2"></div>

      {/* Master View Icon (optional - for quick access) */}
      <Link
        href="/modules"
        className={`p-3 rounded-lg transition-colors ${
          pathname === '/modules' 
            ? 'bg-indigo-100 text-indigo-600' 
            : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
        }`}
        title="Master View"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
      </Link>
    </aside>
  );
}