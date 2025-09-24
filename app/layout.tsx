// app/layout.tsx - FIXED MOBILE RENDERING
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';

export default function RootLayout() {
  const [showApp, setShowApp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    // Check initially
    checkMobile();

    // Listen for resize
    window.addEventListener('resize', checkMobile);
    
    // Show app after splash
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 6800);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <html>
      <body className="h-screen w-screen overflow-hidden">
        {/* SplashScreen always visible */}
        <div className="fixed inset-0 z-40">
          <SplashScreen />
        </div>

        {/* Conditionally render the appropriate layout */}
        <div className={`relative w-full h-full z-50 transition-opacity duration-1000 ease-in-out ${showApp ? 'opacity-100' : 'opacity-0'}`}>
          {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </div>
      </body>
    </html>
  );
}