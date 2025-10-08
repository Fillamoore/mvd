// components/MobileMasterViewMenu.tsx - TRANSPARENT BACKGROUND
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMasterViewMenu() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/scenario-player');
  };

  return (
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-start items-center">
        {/* Mobile Back Icon - TRANSPARENT */}
        <Link 
          href = '/scenario-player'
          className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors"
          title="Back to Scenarios"
        >
          <Image
            src="/back-icon.png"
            alt="Back to Scenarios"
            width={24}
            height={24}
            className="w-6 h-6 invert" 
            priority={true} // Preload important images
            loading="eager" // Load immediately
          />
        </Link>
      </div>
    </footer>
  );
}