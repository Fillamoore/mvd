// app/layout.tsx - DELAY FIX
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/SplashScreen';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import MobileMasterView from '../components/MobileMasterView';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showApp, setShowApp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show transition overlay during route changes
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 50); // Tiny delay
    
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setShowApp(true);
      setShowSplash(false);
    }, 6800);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const renderContent = () => {
    if (isMobile) {
      if (pathname === '/mobile-master') {
        return <MobileMasterView />;
      } else {
        return <MobileLayout />;
      }
    } else {
      return <DesktopLayout />;
    }
  };

  return (
    <html>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)] bg-black">
        {showSplash && <SplashScreen />}
        
        {/* Hide content during tiny transition */}
        <div style={{ display: isTransitioning ? 'none' : 'block' }} className={`relative w-full h-full z-50 ${showApp ? 'opacity-100' : 'opacity-0'}`}>
          {renderContent()}
        </div>
        
        {/* Optional: Show black screen during transition */}
        {isTransitioning && (
          <div className="fixed inset-0 bg-black z-40"></div>
        )}
      </body>
    </html>
  );
}