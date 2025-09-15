// components/DesktopSidebar.tsx - SIMPLIFIED
import MasterView from './MasterView';

export default function DesktopSidebar() {
  return (
    <aside className="w-80">
      <MasterView isMobile={false} />
    </aside>
  );
}