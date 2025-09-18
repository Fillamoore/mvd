'use client';

import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // This timer should be set to a value that matches the duration of your
    // SplashScreen's internal animations.
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 6800); // 6.8 seconds based on your animation sequence

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* The SplashScreen is rendered in the background, always visible */}
      <div className="fixed inset-0 z-40">
        <SplashScreen />
      </div>

      {/* Your app content is rendered on top. It starts as transparent and fades in. */}
      <div className={`
        relative w-full h-full z-50 transition-opacity duration-1000 ease-in-out
        ${showApp ? 'opacity-100' : 'opacity-0'}
      `}>
        {children}
      </div>
    </div>
  );
}