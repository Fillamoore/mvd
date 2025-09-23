'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import DesktopLayout from '../components/DesktopLayout';
import ScenarioPlayer from '../components/ScenarioPlayer';

export default function RootLayout() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 6800); // Match SplashScreen animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <body className="h-screen w-screen overflow-hidden">
        {/* SplashScreen always visible */}
        <div className="fixed inset-0 z-40">
          <SplashScreen />
        </div>

        {/* App content fades in */}
        <div className={`
          relative w-full h-full z-50 transition-opacity duration-1000 ease-in-out
          ${showApp ? 'opacity-100' : 'opacity-0'}
        `}>
          {/* Desktop layout */}
          <DesktopLayout />

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col h-screen">
            <main className="flex-1 overflow-auto overflow-hidden bg-gray-50">
              <ScenarioPlayer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
