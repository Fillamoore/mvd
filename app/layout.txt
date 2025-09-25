// app/layout.tsx - FIXED EXPORT
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
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (!hasSeenSplash) {
      const timer = setTimeout(() => {
        setShowApp(true);
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 6800);
      
      return () => clearTimeout(timer);
    } else {
      setShowApp(true);
      setShowSplash(false);
    }

    return () => {
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
      <body className="h-screen w-screen overflow-hidden">
        {showSplash && (
          <div className="fixed inset-0 z-40">
            <SplashScreen />
          </div>
        )}

        <div className={`relative w-full h-full z-50 transition-opacity duration-1000 ease-in-out ${showApp ? 'opacity-100' : 'opacity-0'}`}>
          {renderContent()}
        </div>
      </body>
    </html>
  );
}
