// components/PWAInstallPrompt.tsx - FINAL SIMPLIFIED
'use client';

import Image from 'next/image';

export default function PWAInstallPrompt() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <Image
          src="/qikr-logo.webp"
          alt="App Logo"
          width={180}
          height={105} 
          priority
          className="mb-6"
        />
        <div className="bg-white rounded-2xl max-w-md w-full p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Installing on iPhone
          </h2>
          
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-800">1. Tap the Share Button below</p>
              <Image
                src="/share-icon.webp"
                alt="Share"
                width={32}
                height={32}
                className="w-8 h-8"
                priority={true} 
                loading="eager"   
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-800">2. Scroll to &apos;Add to Home Screen&apos;</p>
              <Image
                src="/next-icon.webp"
                alt="Add"
                width={32}
                height={32}
                className="w-7 h-7 mr-[2px]"
                priority={true} 
                loading="eager"   
              />
            </div>
            
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-800">3. Tap &apos;done&apos; in bottom right</p>
              <Image
                src="/done-button.webp"
                alt="done"
                width={70}
                height={35}
                priority={true} 
                loading="eager"   
              />
            </div>
            
            <div className="flex items-center">
              <Image
                src="/icon-192x192.webp"
                alt="Add"
                width={70}
                height={70}
                priority={true} 
                loading="eager"   
              />
              <p className="ml-4 font-medium text-gray-800">
                You&apos;ll then be able to run qikr from the Home Screen.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}