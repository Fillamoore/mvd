// app/layout.tsx (FINAL - NO checkUserExists)
'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import OnboardingDesktop from '../components/OnboardingDesktop';
import OnboardingMobile from '../components/OnboardingMobile';
import OfflineBlock from '../components/OfflineBlock';
import { Lato } from 'next/font/google';
import { useLocalStore } from '@/store/useLocalStore';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

type AppState = 'checking' | 'pwa_install' | 'onboarding' | 'splash' | 'main_app' | 'offline_block';
type OnboardingFlow = 'onboarding-desktop' | 'onboarding-mobile';

export default function RootLayout() {
  
  useOnlineStatus(); 

  const email = useLocalStore((state) => state.email);
  const isOnline = useLocalStore((state) => state.isOnline);
  const syncOnAppLoad = useLocalStore((state) => state.syncOnAppLoad);
  const [appState, setAppState] = useState<AppState>('checking');
  const [onboardingFlow, setOnboardingFlow] = useState<OnboardingFlow>('onboarding-desktop');
  const [isMobile, setIsMobile] = useState(false);
  
  // FIXED: Only sync when we transition to main_app state
  useEffect(() => {
    console.log('🔄 APP: State changed', { appState, email, isOnline });
   
    // Check for sync up as soon as the splash cycle starts.
    if (appState === 'splash' && email && isOnline) {
      console.log('🔄 APP: Main app loaded with email and online - triggering sync');
      syncOnAppLoad();
    }
  }, [appState, email, isOnline]);
  
  useEffect(() => {
    const determineFlow = async () => {

      const emailFromStore = useLocalStore.getState().email;

      // Check here for first time login (implied by no email from store). If online, make a HARD STOP. 
      if (!navigator.onLine && !emailFromStore) {
        setAppState('offline_block');
        return;
      }

      const ua = navigator.userAgent;
      const isIOS = /iPhone|iPad|iPod/.test(ua);
      const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

      setIsMobile(isIOS);

      // PWA install prompt for iOS Safari
      if (isIOS && isSafari && !isStandalone) {
        setAppState('pwa_install');
        return; 
      }

      // If first time in, do the right onboarding for this device. 
      if (!emailFromStore) {
        setOnboardingFlow(isIOS ? 'onboarding-mobile' : 'onboarding-desktop');
        setAppState('onboarding');
      } else {
        setAppState('splash');
      }

    };

    determineFlow();
  }, []);

  const handleOnboardingComplete = () => {
    setAppState('splash');
  };

  const handlePWAInstallComplete = () => {
    const hasAuthToken = !!localStorage.getItem('auth_token');
    setAppState(hasAuthToken ? 'splash' : 'onboarding');
  };

  const renderOnboarding = () => {
    switch (onboardingFlow) {
      case 'onboarding-desktop':
        return <OnboardingDesktop onComplete={handleOnboardingComplete} />;
      case 'onboarding-mobile':
        return <OnboardingMobile onComplete={handleOnboardingComplete} />;
    }
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
            <img src="/spinner.webp" alt="Loading..." className="w-16 h-16 animate-spin filter invert" />
          </div>
        )}

        {appState === 'offline_block' && <OfflineBlock />}

        {appState === 'pwa_install' && (
          <PWAInstallPrompt onInstallComplete={handlePWAInstallComplete} />
        )}

        {appState === 'onboarding' && renderOnboarding()}

        {(appState === 'main_app' || appState === 'splash') && (
          <div className={`w-full h-full transition-opacity duration-500 ${
            appState === 'main_app' ? 'opacity-100' : 'opacity-0'
          }`}>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}

        {appState === 'splash' && (
          <div className="fixed inset-0 z-50">
            <SplashScreen onComplete={() => setAppState('main_app')} />
          </div>
        )}
      </body>
    </html>
  );
}