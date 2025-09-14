// components/DesktopSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '🏠 Home' },
    { href: '/modules', label: '📚 Modules' },
    { href: '/scenario-player', label: '🎮 Scenario Player' },
    { href: '/settings', label: '⚙️ Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center mr-2">
          AA
        </div>
        <h1 className="text-xl font-bold text-gray-900">Advisory Accelerator</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600 border-r-2 border-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Progress Section */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Progress</h3>
        <div className="text-xs text-gray-600">
          <div className="flex justify-between mb-1">
            <span>Completion</span>
            <span>25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className="bg-indigo-600 h-1 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}