// app/layout.tsx - WITH SINGLE ONLINE STATUS SOURCE
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

  // Put the hook in place to check for online status changes.
  useOnlineStatus();
    
  const isOnline = useLocalStore((state) => state.isOnline); 
  const [appState, setAppState] = useState<AppState>('checking');
  const [onboardingFlow, setOnboardingFlow] = useState<OnboardingFlow>('onboarding-desktop');
  const [isMobile, setIsMobile] = useState(false);
  const syncWithDBOnStartup = useLocalStore((state: any) => state.syncWithDBOnStartup);

  useEffect(() => {
    
    const email = useLocalStore.getState().email;

    // Use store's isOnline instead of navigator.onLine
    if (!isOnline && !email) {
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
    if (!email) {
      setOnboardingFlow(isIOS ? 'onboarding-mobile' : 'onboarding-desktop');
      setAppState('onboarding');
    } else {
      // Do the DB handshake once onboarding has completed and BEFORE the main app loads to avoid timing issues.
      //console.log('Layout: calling syncOnAppLoad where onboarding wasn\'t needed.'); 
      setAppState('splash');      
      //if (isOnline){
      //  console.log('Desktop Layout: ',email);
      //  syncWithDBOnStartup();
      //}
      
    }
  }, [isOnline]); // Add isOnline to dependencies

  const handleOnboardingComplete = () => {
    // Do the DB handshake once onboarding has completed and BEFORE the main app loads to avoid timing issues.
    console.log('Layout: calling syncOnAppLoad after onboarding completed.'); 
    setAppState('splash');

    {/*
    if (isOnline) {
      syncWithDBOnStartup();
    }
    */}  
  };

  const renderOnboarding = () => {
    switch (onboardingFlow) {
      case 'onboarding-desktop':
        return <OnboardingDesktop onComplete={handleOnboardingComplete} />;
      case 'onboarding-mobile':
        return <OnboardingMobile onComplete={handleOnboardingComplete} />;
    }
  };

  //console.log('in layout, about to render',appState);

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
        
        {appState === 'offline_block' && <OfflineBlock />}

        {appState === 'pwa_install' && <PWAInstallPrompt />}

        {appState === 'onboarding' && renderOnboarding()}

        {appState === 'splash' && (
          <div className="w-full h-full invisible">
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}
        
        {appState === 'main_app' && (
          <div className="w-full h-full visible">
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}

        {/*
        <div className={`w-full h-full ${
          appState === 'splash' ? 'invisible' : 'visible'
        }`}>
          {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </div>
        */}

        {appState === 'splash' && (
          <div className="fixed inset-0 z-50">
            <SplashScreen onComplete={() => setAppState('main_app')} />
          </div>
        )}
        
      </body>
    </html>
  );
}