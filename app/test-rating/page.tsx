import ScenarioCard from '@/components/ScenarioCard';

const sampleScenario = {
  prompt: "A client is hesitant about migrating to the cloud due to security concerns. They're particularly worried about data sovereignty and compliance with regional regulations. How do you address their specific concerns while maintaining confidence in the cloud solution?",
  responses: [
    {
      id: "A",
      text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates. Major providers offer compliance certifications for various regulations."
    },
    {
      id: "B", 
      text: "This is a much longer response that should wrap across multiple lines to test the mobile layout properly. We need to ensure that even with extensive text content, the layout remains clean and readable on smaller screens while maintaining the tight spacing and full-width design."
    },
    {
      id: "C",
      text: "Suggest a phased approach starting with a pilot project for non-sensitive data, allowing them to build confidence while we conduct a thorough risk assessment and compliance review."
    }
  ]
};

export default function TestRatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-4 md:p-8"> {/* Reduced padding on mobile */}
      <div className="w-full max-w-3xl space-y-6 md:space-y-8"> {/* Full width on mobile */}
        
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 w-full"> {/* Full width, reduced padding */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">Mobile Layout Test</h1>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8">Testing compact mobile design</p>
          
          <ScenarioCard 
            prompt={sampleScenario.prompt}
            responses={sampleScenario.responses}
          />

          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-1 md:mb-2 text-sm md:text-base">Mobile Layout Goals:</h3>
            <ul className="list-disc list-inside text-xs md:text-sm text-blue-700 space-y-0.5 md:space-y-1">
              <li>Full-width cards on mobile</li>
              <li>Smaller font sizes (text-sm mobile, text-base desktop)</li>
              <li>Tighter line spacing (leading-snug mobile, leading-normal desktop)</li>
              <li>Reduced padding on mobile (p-4 mobile, p-6 desktop)</li>
              <li>Maintain rating box position and functionality</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}