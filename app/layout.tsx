'use client';

import './globals.css';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/SplashScreen';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import MobileMasterView from '../components/MobileMasterView';
import OnboardingMobile from '../components/OnboardingMobile';
import OnboardingDesktop from '../components/OnboardingDesktop';

import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

declare global {
  interface Window {
    MSStream?: unknown;
  }
}

type AppState = 'checking' | 'pwa_install' | 'onboarding' | 'splash' | 'main_app';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [appState, setAppState] = useState<AppState>('checking');
  const prevAppStateRef = useRef<AppState>('checking');
  const pathname = usePathname();

  useEffect(() => {
    const initializeApp = () => {
      if (appState !== 'checking') return;

      const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      setIsMobile(isIOSDevice);

      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const onboardingCompleted = localStorage.getItem('onboardingCompleted');

      if (isIOSDevice && !isStandalone) {
        setAppState('pwa_install');
      } else if (!onboardingCompleted) {
        setAppState('onboarding');
      } else {
        setAppState('splash');
      }
    };

    if (typeof window !== 'undefined') {
      initializeApp();
    }
  }, [appState]);

  const handlePWAInstallComplete = () => {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    setAppState(onboardingCompleted ? 'splash' : 'onboarding');
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setAppState('splash');
  };

  const handleSplashComplete = () => {
    setAppState('main_app');
    setTimeout(() => {
      if (appState !== 'main_app') {
        setAppState('main_app');
      }
    }, 500);
  };

  return (
    <html>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="qikr" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-orientations" content="portrait" />
      </head>
      <body className={`${lato.className} h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)] bg-black`}>
        {(appState === 'main_app' || appState === 'splash') && (
          <div className="w-full h-full">
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}

        {appState === 'pwa_install' && (
          <PWAInstallPrompt onInstallComplete={handlePWAInstallComplete} />
        )}

        {appState === 'onboarding' && (
          isMobile ? 
            <OnboardingMobile onComplete={handleOnboardingComplete} /> : 
            <OnboardingDesktop onComplete={handleOnboardingComplete} />
        )}

        {appState === 'splash' && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}

        {appState === 'checking' && (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="text-white">Loading...</div>
          </div>
        )}
      </body>
    </html>
  );
}
