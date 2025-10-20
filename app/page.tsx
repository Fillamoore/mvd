'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';
import OnboardingMobile from '../components/OnboardingMobile';
import OnboardingDesktop from '../components/OnboardingDesktop';

import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

type AppState = 'checking' | 'pwa_install' | 'onboarding' | 'splash' | 'main_app';

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
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-orientations" content="portrait" />
      </head>

      <body className={`${lato.className} h-screen w-screen overflow-hidden pb-[env(safe-area-inset-bottom)] bg-black`}>

        {appState === 'pwa_install' && (
          <PWAInstallPrompt onInstallComplete={handlePWAInstallComplete} />
        )}

        {appState === 'onboarding' && (
          isMobile
            ? <OnboardingMobile onComplete={handleOnboardingComplete} />
            : <OnboardingDesktop onComplete={handleOnboardingComplete} />
        )}

        {appState === 'splash' && (
          <SplashScreen onComplete={() => setAppState('main_app')} />
        )}

        {appState === 'main_app' && (
          <div className="w-full h-full">
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
          </div>
        )}
      </body>
    </html>
  );
}
