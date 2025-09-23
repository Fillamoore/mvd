// components/DesktopLayout.tsx
import DesktopSidebar from './DesktopSidebar';
import ScenarioPlayer from './ScenarioPlayer';

export default function DesktopLayout() {
  return (
    <div className="hidden md:flex flex-col h-screen">
      <div className="p-5 flex shadow-inner space-x-5 overflow-auto overflow-hidden bg-[url('/screen-background.jpg')] bg-cover bg-center">
        <aside className="desktop-sidebar-wrapper w-96">
          <DesktopSidebar />
        </aside>
        <main className="desktop-scenarios-panel-wrapper flex-1 overflow-auto">
          <ScenarioPlayer />
        </main>
      </div>
    </div>
  );
}
