export interface ResponseOption {
  id: string;
  text: string;
  expertRationale: string;
  expertRating: number;
  expertMedia?: { // Add optional expertMedia
    url: string;
    caption?: string;
    altText: string;
  };
}

export interface ScenarioData {
  id: string;
  prompt: string;
  responses: ResponseOption[];
}

export const sampleScenario: ScenarioData = {
  id: "cloud-security-1",
  prompt: "A client is hesitant about migrating to the cloud due to security concerns. They're particularly worried about data sovereignty and compliance with regional regulations. How do you address their specific concerns while maintaining confidence in the cloud solution?",
  responses: [
    {
      id: "A",
      text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates.",
      expertRationale: "This is a good start as it addresses the security concern directly with factual information about cloud provider capabilities. Major providers like AWS, Azure, and GCP invest billions in security and offer more robust protection than most companies can achieve on-premise.",
      expertRating: 4,
      // ADD THE EXPERT MEDIA TO THIS RESPONSE
      expertMedia: {
        url: "/expert-media/cloud-security-insight.png",
        caption: "Cloud Shared Responsibility Model",
        altText: "Diagram showing how cloud security is a shared responsibility between provider and customer"
      }
    },
    {
      id: "B", 
      text: "Suggest they maintain a hybrid approach to keep sensitive data on-premise while using cloud for less critical applications.",
      expertRationale: "While this seems practical, it avoids addressing the core concern about cloud security and may reinforce their fears rather than building confidence. A hybrid approach often creates more complexity without solving the fundamental trust issue.",
      expertRating: 2
    },
    {
      id: "C",
      text: "Tell them that security is their responsibility regardless of where the data is stored, so the location doesn't matter.",
      expertRationale: "This is dismissive and incorrect. While clients have responsibilities, cloud providers offer significant security advantages and compliance certifications that should be highlighted. This response misses the opportunity to educate and build trust.",
      expertRating: 1
    }
  ]
};