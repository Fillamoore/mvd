// components/DesktopLayout.tsx
'use client';

import { useState, useEffect } from 'react';
import DesktopSidebar from './DesktopSidebar';
import ScenarioPlayer from './ScenarioPlayer';
import { useLocalStore } from '@/store/useLocalStore';

export default function DesktopLayout() {

  const store = useLocalStore();

  const [isReady, setIsReady] = useState(false);

  {/*
  useEffect(() => {
    // Just wait 100ms for everything to settle
    const timer = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Show blank screen during initial load
  if (!isReady) {
    return <div className="w-full h-full bg-black" />;
  }
  */}
  
  return (
    <div className="flex flex-col h-screen bg-[url('/screen-background.webp')] bg-cover bg-center">
      <div className="p-5 flex space-x-5 overflow-auto">
        <aside className="w-96">
          <DesktopSidebar />
        </aside>
        <main className="flex-1 overflow-auto">
          <ScenarioPlayer />
        </main>
      </div>
    </div>
  );
}