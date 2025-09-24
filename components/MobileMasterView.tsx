// components/MobileMasterView.tsx
'use client';

import MasterView from './MasterView';
import MobileMasterViewMenu from './MobileMasterViewMenu'; // We'll create this next

export default function MobileMasterView() {
  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Main content area */}
      <div className="flex-1 overflow-hidden">
        <MasterView isMobile={true} />
      </div>
      
      {/* Mobile bottom menu */}
      <MobileMasterViewMenu />
    </div>
  );
}