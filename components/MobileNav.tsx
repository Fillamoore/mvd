// components/MobileNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '🏠', text: 'Home' },
    { href: '/modules', label: '📚', text: 'Modules' },
    { href: '/scenario-player', label: '🎮', text: 'Player' },
    { href: '/settings', label: '⚙️', text: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <span className="text-lg">{item.label}</span>
              <span className="text-xs mt-1">{item.text}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}