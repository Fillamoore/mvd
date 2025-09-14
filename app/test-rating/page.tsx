import ScenarioCard from '@/components/ScenarioCard';

const sampleScenario = {
  prompt: "A client is hesitant about migrating to the cloud due to security concerns. They're particularly worried about data sovereignty and compliance with regional regulations.",
  responses: [
    {
      id: "A",
      text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates."
    },
    {
      id: "B", 
      text: "This response should show the right-aligned positioning clearly, demonstrating how the card is positioned towards the right side of the viewport with appropriate spacing."
    }
  ]
};

export default function TestRatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-6xl space-y-6 md:space-y-8">
        
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 w-full">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Alignment Test</h1>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8">Testing left/right card alignment</p>
          
          {/* Container to visualize the alignment */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Viewport Visualization:</h3>
            <div className="h-1 bg-blue-200 w-full mb-2"></div>
            <div className="flex justify-between text-xs text-blue-600">
              <span>Left</span>
              <span>Center</span>
              <span>Right</span>
            </div>
          </div>
          
          <ScenarioCard 
            prompt={sampleScenario.prompt}
            responses={sampleScenario.responses}
          />

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Alignment Goals:</h3>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>Scenario card: Left justified, 90% width mobile / 60% desktop</li>
              <li>Response cards: Right justified, 90% width mobile / 60% desktop</li>
              <li>Both cards: Same dark gray text (#111827)</li>
              <li>Visual distinction through positioning, not internal padding</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}