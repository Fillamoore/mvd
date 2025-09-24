// components/MobileMasterViewMenu.tsx - MOBILE BACK ICON
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MobileMasterViewMenu() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/scenario-player');
  };

  return (
    <footer className="bg-black border-t border-gray-700 p-3 safe-area-padding-bottom">
      <div className="flex justify-start items-center">
        {/* Mobile Back Icon */}
        <button
          onClick={handleBackClick}
          className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          title="Back to Scenarios"
        >
          <Image
            src="/mobile-back-icon.png"
            alt="Back to Scenarios"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </div>
    </footer>
  );
}