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
    },
    {
      id: "C",
      text: "Third response to ensure all responses are visible and properly aligned to the right with consistent styling and font weight."
    }
  ]
};

export default function TestRatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-6xl space-y-6 md:space-y-8">
        
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 w-full">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Final Layout Test</h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">All three responses should be visible with proper right alignment</p>
          
          <ScenarioCard 
            scenarioId="test-scenario-1" // ← ADD THIS REQUIRED PROP
            prompt={sampleScenario.prompt}
            responses={sampleScenario.responses}
          />

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Success Criteria:</h3>
            <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
              <li>✅ Scenario card left-aligned with dark text</li>
              <li>✅ All 3 response cards right-aligned</li>
              <li>✅ Consistent font weight across all cards</li>
              <li>✅ Rating box borders match response card borders</li>
              <li>✅ Clean lilac color scheme</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}