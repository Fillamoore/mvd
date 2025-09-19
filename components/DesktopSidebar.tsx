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
    <MasterView isMobile={false} onModuleSelect={handleModuleSelect} />
  );
}