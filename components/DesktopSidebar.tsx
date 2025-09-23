// components/DesktopSidebar.tsx
'use client';

import MasterView from './MasterView';

export default function DesktopSidebar() {
  return (
    <div className="border-2 rounded-[10px] bg-gray-100 border-gray-800 h-full overflow-hidden">
      <MasterView />
    </div>
  );
}
