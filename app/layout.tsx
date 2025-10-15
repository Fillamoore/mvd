// app/layout.tsx
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/SplashScreen';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import MobileMasterView from '../components/MobileMasterView';

import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

// Add proper type for window with MSStream
declare global {
  interface Window {
    MSStream?: unknown;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPWAInstall, setShowPWAInstall] = useState(false);
  const pathname = usePathname();

  // ALL HOOKS AT TOP
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 50); 
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const checkDevice = () => {
      const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      setIsMobile(isIOSDevice);
    };

    const checkPWAInstall = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      
      if (isIOSDevice && !isStandalone) {
        setShowPWAInstall(true);
        setShowSplash(false);
      } else {
        setShowSplash(true);
      }
    };

    checkDevice();
    checkPWAInstall();
  }, []);

  const renderContent = () => {
    if (isMobile) {
      if (pathname === '/mobile-master') {
        return <MobileMasterView />; // NO CHILDREN
      } else {
        return <MobileLayout />; // NO CHILDREN
      }
    } else {
      return <DesktopLayout />; // NO CHILDREN
    }
  };

  return (
    <html>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="qikr" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-orientations" content="portrait" />
      </head>
      <body className={`${lato.className} h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)] bg-black`}>
        
        {/* Main App - ONLY show if NOT showing install prompt */}
        {!showPWAInstall && (
          <div className="relative w-full h-full z-10">
            {renderContent()}
          </div>
        )}

        {/* Install Prompt - BLOCKS everything else when shown */}
        {showPWAInstall && (
          <PWAInstallPrompt onInstallComplete={() => setShowPWAInstall(false)} />
        )}

        {/* Splash Screen - ONLY show if NOT showing install prompt */}
        {showSplash && !showPWAInstall && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
        
        {isTransitioning && (
          <div className="fixed inset-0 bg-black z-40"></div>
        )}
      </body>
    </html>
  );
}