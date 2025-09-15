// components/DesktopSidebar.tsx - FIXED
import MasterView from './MasterView';

export default function DesktopSidebar() {
  return (
    <aside className="w-80 h-full flex flex-col">
      <MasterView isMobile={false} />
    </aside>
  );
}