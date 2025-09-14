import RatingBox from '@/components/RatingBox';
import ScenarioCard from '@/components/ScenarioCard';

// Sample scenario data with one very long response
const sampleScenario = {
  prompt: "A client is hesitant about migrating to the cloud due to security concerns. They're particularly worried about data sovereignty and compliance with regional regulations. How do you address their specific concerns while maintaining confidence in the cloud solution?",
  responses: [
    {
      id: "A",
      text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates. Major providers offer compliance certifications for various regulations and have data centers in multiple regions to address sovereignty concerns."
    },
    {
      id: "B", 
      text: "This is a much longer response that should wrap across multiple lines to test the layout properly. We need to ensure that even with extensive text content, the rating box remains tightly positioned in the bottom right corner with consistent 8px spacing, regardless of how many lines the response text occupies. The text should flow naturally and the layout should remain clean and professional."
    },
    {
      id: "C",
      text: "Suggest a phased approach starting with a pilot project for non-sensitive data, allowing them to build confidence while we conduct a thorough risk assessment and compliance review specific to their industry and regional requirements, ensuring all data handling meets their legal obligations."
    }
  ]
};

export default function TestRatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-8">
      <div className="max-w-3xl w-full space-y-8">
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Layout Test</h1>
          <p className="text-gray-600 mb-8">Testing tight spacing and long text responses</p>
          
          <ScenarioCard 
            prompt={sampleScenario.prompt}
            responses={sampleScenario.responses}
          />

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Layout Goals:</h3>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Prompt in separate left-justified box</li>
              <li>Rating boxes positioned 8px from bottom-right corner</li>
              <li>Response B should show 5+ lines of text</li>
              <li>Rating box remains fixed position regardless of text length</li>
              <li>Clean spacing and professional appearance</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}