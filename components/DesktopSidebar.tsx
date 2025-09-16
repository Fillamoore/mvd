// components/DesktopSidebar.tsx
'use client';

import MasterView from './MasterView';
import { useScenariosProgressLocalStore } from '@/store/useScenariosProgressLocalStore'; 

export default function DesktopSidebar() {
  const setCurrentModule = useScenariosProgressLocalStore(state => state.setCurrentModule);

  const handleModuleSelect = (moduleId: number) => {
    console.log(`[DESKTOP] Module ${moduleId} selected, updating store...`);
    setCurrentModule(moduleId);
    
    // Additional logic to reset ScenarioPlayer will go here
  };

  return (
    <aside className="w-80 h-full flex flex-col">
      <MasterView isMobile={false} onModuleSelect={handleModuleSelect} />
    </aside>
  );
}