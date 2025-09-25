// app/layout.tsx - COMPLETE WITH PWA FIXES
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
    
    // ALWAYS show splash screen on every load
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Advisory Accelerator" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        
        {/* Nuclear option styles */}
        <style dangerouslySetInnerHTML={{__html: `
          body { 
            margin: 0; 
            padding: 0;
            height: 100vh;
            overflow: hidden;
          }
          html { 
            height: 100%; 
            overflow: hidden;
          }
        `}} />
      </head>
      <body className="h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)]">
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