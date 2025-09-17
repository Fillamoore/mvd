'use client';

import { useState } from 'react';
import SplashScreen from '../components/SplashScreen';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        children
      )}
    </>
  );
}
