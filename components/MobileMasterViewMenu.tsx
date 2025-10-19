'use client';

import Image from 'next/image';

export default function MobileMasterViewMenu({ onBackToScenario }: { onBackToScenario: () => void }) {
  return (
    <footer className="bg-black border-t border-gray-700 p-2 safe-area-padding-bottom">
      <div className="flex justify-start items-center">
        <button 
          onClick={onBackToScenario}
          className="flex items-center justify-center p-3 rounded-lg bg-transparent transition-colors"
          title="Back to Scenarios"
        >
          <Image
            src="/back-icon.png"
            alt="Back to Scenarios"
            width={24}
            height={24}
            className="w-5 h-5 invert"
          />
        </button>
      </div>
    </footer>
  );
}
