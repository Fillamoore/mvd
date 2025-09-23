import ScenarioPlayer from './ScenarioPlayer';

export default function MobileLayout() {
  return (
    <div className="md:hidden flex flex-col h-screen">
      <main className="flex-1 overflow-auto overflow-hidden bg-gray-50">
        <ScenarioPlayer />
      </main>
    </div>
  );
}
