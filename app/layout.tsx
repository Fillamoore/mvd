// app/layout.tsx (KEEP THIS ONE)
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import OnboardingMobile from '../components/OnboardingMobile';
import OnboardingDesktop from '../components/OnboardingDesktop';
import { getAllModules } from '@/data/scenarios-content';

import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

type AppState = 'checking' | 'pwa_install' | 'onboarding' | 'splash' | 'main_app';

// Pre-loading utility
const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  if (typeof window === 'undefined') return Promise.resolve([]);
  
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${url}`));
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

const getModuleImagePaths = (count: number): string[] => {
  return Array.from({ length: count }, (_, i) => 
    `/module-infographics/${i + 1}.webp`
  );
};

export default function RootLayout() {
  const [appState, setAppState] = useState<AppState>('checking');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (appState !== 'checking') return;

    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/.test(ua) && !('MSStream' in window);
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');

    setIsMobile(isIOS);

    if (isIOS && isSafari && !isStandalone) {
      setAppState('pwa_install');
    } else if (!onboardingCompleted) {
      setAppState('onboarding');
    } else {
      setAppState('splash');
    }
  }, [appState]);

  // Pre-load all module images when app starts
  useEffect(() => {
    const preloadAllModuleImages = async () => {
      try {
        const modules = getAllModules();
        const imagePaths = getModuleImagePaths(modules.length);
        await preloadImages(imagePaths);
        console.log('🎉 All module images pre-loaded!');
      } catch (error) {
        console.warn('Some images failed to pre-load:', error);
      }
    };

    preloadAllModuleImages();
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    setAppState('splash');
  };

  const handlePWAInstallComplete = () => {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    setAppState(onboardingCompleted ? 'splash' : 'onboarding');
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="qikr" />
        <link rel="apple-touch-icon" href="/icon-192.webp" />
        <meta name="apple-mobile-web-app-orientations" content="portrait" />
      </head>

      <body className={`${lato.className} h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)] bg-black`}>
        {appState === 'checking' && (
          <div className="flex justify-center items-center h-full">
            <img src="/spinner.svg" alt="Loading..." className="w-16 h-16 animate-spin filter invert" />
          </div>
        )}

        {appState === 'pwa_install' && (
          <PWAInstallPrompt onInstallComplete={handlePWAInstallComplete} />
        )}

        {appState === 'onboarding' && (
          isMobile
            ? <OnboardingMobile onComplete={handleOnboardingComplete} />
            : <OnboardingDesktop onComplete={handleOnboardingComplete} />
        )}

        {/* Main app renders in background while splash is visible */}
        {(appState === 'main_app' || appState === 'splash') && (
          <div className={`w-full h-full transition-opacity duration-500 ${
            appState === 'main_app' ? 'opacity-100' : 'opacity-0'
          }`}>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}

        {/* SplashScreen overlays on top */}
        {appState === 'splash' && (
          <div className="fixed inset-0 z-50">
            <SplashScreen onComplete={() => setAppState('main_app')} />
          </div>
        )}
      </body>
    </html>
  );
}