'use client';

import RatingBox from './RatingBox';

interface ResponseOption {
  id: string;
  text: string;
}

interface ScenarioCardProps {
  scenarioId: string;
  prompt: string;
  responses: ResponseOption[];
}

export default function ScenarioCard({ 
  scenarioId = 'default-scenario',
  prompt, 
  responses, 
}: ScenarioCardProps) {
  const cycleRating = useScenariosProgressLocalStore((state) => state.cycleRating);

  const handleResponseClick = (responseId: string) => {
    cycleRating(scenarioId, responseId);
  };

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      {/* Scenario Prompt - Left aligned */}
      <div className="bg-lilac-200 border-lilac-400 rounded-lg border p-4 md:p-6 text-left 
                     w-full md:w-4/5 lg:w-3/5 self-start">
        <div className="text-base md:text-lg font-medium text-gray-900 leading-tight">
          {prompt}
        </div>
      </div>

      {/* Response Options - Right aligned */}
      <div className="space-y-3 md:space-y-4 w-full">
        {responses.map((response) => (
          <div 
            key={response.id} 
            onClick={() => handleResponseClick(response.id)}
            className="relative bg-lilac-100 border-lilac-300 rounded-lg border p-4 md:p-6 pr-12 md:pr-16 
                       cursor-pointer transition-all duration-200 ease-in-out 
                       w-full md:w-4/5 lg:w-3/5 self-end
                       hover:shadow-md hover:border-lilac-400"
          >
            {/* Response Text */}
            <div className="text-sm md:text-base text-gray-900 leading-snug md:leading-normal font-medium">
              {response.text}
            </div>
            
            {/* Rating Box - Now with scenario context */}
            <div className="absolute bottom-2 right-2">
              <RatingBox 
                scenarioId={scenarioId}
                responseId={response.id}
                borderColor="border-lilac-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}