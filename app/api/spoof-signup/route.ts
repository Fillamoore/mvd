import { NextRequest } from 'next/server';

const countryDistribution = [
  { country: "UK", probability: 0.70 },
  { country: "Germany", probability: 0.05 },
  { country: "France", probability: 0.03 },
  { country: "Spain", probability: 0.02 },
  { country: "Italy", probability: 0.02 },
  { country: "Netherlands", probability: 0.01 },
  { country: "USA", probability: 0.07 },
  { country: "Canada", probability: 0.03 },
  { country: "Australia", probability: 0.02 },
  { country: "India", probability: 0.02 },
  { country: "Singapore", probability: 0.01 },
  { country: "Japan", probability: 0.01 },
  { country: "China", probability: 0.01 }
];

function getRandomCountry() {
  const random = Math.random();
  let cumulative = 0;
  
  for (const item of countryDistribution) {
    cumulative += item.probability;
    if (random <= cumulative) {
      return item.country;
    }
  }
  return "UK"; // fallback
}

const knowhowAnchors = [
  { 
    type: "mindset_orientation",
    examples: [
      "Strategic thinking",
      "Commercial awareness", 
      "Political savviness",
      "Stakeholder navigation",
      "Reading the room",
      "Seeing the bigger picture",
      "Executive presence",
      "Influence without authority"
    ],
    probability: 0.25
  },
  {
    type: "resilience_adaptability", 
    examples: [
      "Dealing with ambiguity",
      "Handling complexity",
      "Change navigation",
      "Pressure management",
      "Uncertainty tolerance",
      "Bouncing back faster",
      "Adapting to shifting priorities"
    ],
    probability: 0.20
  },
  {
    type: "judgement_decision",
    examples: [
      "Better decision making",
      "Risk assessment",
      "Pattern recognition", 
      "Critical thinking",
      "Hypothesis generation",
      "Optioneering skills",
      "Spotting red flags",
      "Connecting the dots"
    ],
    probability: 0.20
  },
  {
    type: "advisory_consulting",
    examples: [
      "Client advisory skills",
      "Trusted advisor mindset",
      "Consultative selling",
      "Stakeholder alignment",
      "Influencing outcomes",
      "Building credibility",
      "Managing expectations",
      "Navigating politics"
    ],
    probability: 0.15
  },
  {
    type: "leadership_impact",
    examples: [
      "Leading through influence",
      "Driving change",
      "Making an impact",
      "Thought leadership",
      "Mentoring others",
      "Building followership",
      "Executive communication"
    ],
    probability: 0.10
  },
  {
    type: "politics",
    examples: [
      "Sussing things out",
      "Playing the game",
      "Office politics",
      "Managing up",
      "Using the power dynamics",
      "Street smarts",
      "Navigating the maze",
      "Keeping your head"
    ],
    probability: 0.10
  }
];

function getRandomKnowhowAnchor() {
  const random = Math.random();
  let cumulative = 0;
  
  for (const anchor of knowhowAnchors) {
    cumulative += anchor.probability;
    if (random <= cumulative) {
      return {
        type: anchor.type,
        example: anchor.examples[Math.floor(Math.random() * anchor.examples.length)]
      };
    }
  }
  // Fallback to first anchor if no match (should never happen but TypeScript wants it)
  const fallback = knowhowAnchors[0];
  return {
    type: fallback.type,
    example: fallback.examples[Math.floor(Math.random() * fallback.examples.length)]
  };
}

export async function GET(request: NextRequest) {
  // Add this security check for production
  const authHeader = request.headers.get('authorization');
  
  if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const { db } = await import('@/lib/db');
    
    if (process.env.ENABLE_SPOOFING !== 'true') {
      return new Response('Spoofing disabled');
    }
    
    const shouldRun = Math.random() < 0.5;
    if (!shouldRun) {
      return new Response('Skipped this run');
    }
    
    console.log('🚀 Generating persona with Gemini...');
    
    const persona = await fetchGeminiPersona();
    console.log('👤 Persona generated:', persona);
    
    const email = `${persona.display_name.toLowerCase().replace(/\s+/g, '')}_${Date.now()}@example.com`;
    
    const result = await db.query(
      `INSERT INTO users (email, display_name, role_description, company_type, country, knowhow_goal, real_or_not, status, trial_start) 
       VALUES ($1, $2, $3, $4, $5, $6, FALSE, 'trial', NOW()) RETURNING id`,
      [email, persona.display_name, persona.role_description, persona.company_type, persona.country, persona.knowhow_goal]
    );
    
    console.log('✅ Real user inserted with Gemini:', result.rows[0].id);
    return new Response('Real spoofed user created with Gemini!');
    
  } catch (error) {
    console.log('❌ Error:', error);
    return new Response('ERROR: ' + (error instanceof Error ? error.message : String(error)));
  }
}

async function fetchGeminiPersona() {
  const API_KEY = process.env.GEMINI_API_KEY;
  
  if (!API_KEY) {
    throw new Error('GEMINI_API_KEY is missing');
  }

  const model = 'gemini-2.5-flash-preview-09-2025';
  const selectedCountry = getRandomCountry();
  const knowhowAnchor = getRandomKnowhowAnchor();
  
  const prompt = `Generate a realistic user persona as valid JSON with these exact fields: display_name, role_description, company_type, country, knowhow_goal. 

SPECIFIC REQUIREMENTS:
- The person is from ${selectedCountry}
- Generate a complete randomized name (first name and last name) for display_name that is authentic to ${selectedCountry} and its ethnicity
- The full name should sound like it was randomly selected from a large, diverse, metropolitan phonebook
- Use UK English spellings
- The company_type needs to be appropriate to a mid-large sized professional services, solutions or management consulting company

KNOWHOW GOAL REQUIREMENTS:
- Contextualise the knowhow_goal be in "${knowhowAnchor.type}" and "${knowhowAnchor.example}"
- Use everyday and conversational language i.e. what someone might say to a work friend over a coffee. 1-5 words.
- Role description should be short 1-3 words

Return ONLY JSON.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error('No response from Gemini');
  }

  // Extract JSON from the response
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }
  
  throw new Error('Could not parse JSON from Gemini response');
}