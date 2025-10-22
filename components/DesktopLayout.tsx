'use client';

import DesktopSidebar from './DesktopSidebar';
import ScenarioPlayer from './ScenarioPlayer';

export default function DesktopLayout() {
  return (
    <div className="flex flex-col h-screen bg-[url('/screen-background.webp')] bg-cover bg-center">
      <div className="p-5 flex space-x-5 overflow-auto">
        {/* Sidebar: MasterView */}
        <aside className="w-96">
          <DesktopSidebar />
        </aside>

        {/* Main scenario player */}
        <main className="flex-1 overflow-auto">
          <ScenarioPlayer />
        </main>
      </div>
    </div>
  );
}
