'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-1">
      
      {/* Left-aligned logo/icon */}
      <div className="flex items-center gap-2">
        <Image
          src="/aaicon.ico"
          alt="Advisory Accelerator Icon"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      {/* Right-aligned settings icon */}
      <Link
        href="/menu"
        className={`rounded-lg transition-colors p-2 flex items-center justify-center ${
          pathname === '/menu'
            ? 'bg-indigo-100 text-indigo-200'
            : 'hover:bg-gray-100 hover:text-indigo-200'
        }`}
        title="Menu"
      >
        <Image
          src="/menu-icon.webp"
          alt="Menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </Link>
    </nav>
  );
}
