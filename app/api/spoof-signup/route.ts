// app/api/spoof-signup/route.ts

import type { QueryResult, QueryResultRow } from 'pg';

type DB = {
  query: <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ) => Promise<QueryResult<T>>;
};

let db: DB;

export const config = {
  schedule: '* * * * *' // every minute
};

// Top-level module log to confirm file loads
console.log('📦 Cron module loaded');

try {
  const { db: importedDb } = await import('@/lib/db');
  db = importedDb;
  console.log('🔌 DB imported');
} catch (err) {
  console.error('❌ DB import failed:', err instanceof Error ? err.message : err);
}

export async function GET() {
  const now = new Date().toISOString();
  console.log(`🕒 Cron heartbeat at ${now}`);

  if (process.env.ENABLE_SPOOFING !== 'true') {
    console.log('⚠️ Spoofing disabled');
    return new Response('Spoofing disabled');
  }

  const targetInterval = Math.floor(Math.random() * 21) + 10;
  const shouldRun = Math.random() < 1 / targetInterval;

  if (!shouldRun) {
    console.log(`⏭️ Skipped this run (target interval: ${targetInterval} min)`);
    return new Response(`Skipped this run (target interval: ${targetInterval} min)`);
  }

  console.log('🚀 Proceeding with spoofing logic');

  try {
    console.log('🔍 Fetching persona...');
    const persona = await fetchGeminiPersona();
    console.log('👤 Persona:', persona);

    const email = `${persona.display_name.toLowerCase()}_${Date.now()}@example.com`;

    console.log('📥 Inserting into Aiven...');
    const user_id = await insertIntoAiven({ ...persona, email });

    console.log('📝 Logging cron event...');
    await logCronEvent(user_id);

    console.log(`✅ Spoofed signup inserted (target interval: ${targetInterval} min)`);
    return new Response(`Spoofed signup inserted (target interval: ${targetInterval} min)`);
  } catch (err) {
    console.error('❌ Cron error:', err instanceof Error ? err.message : err);
    return new Response('Cron failed', { status: 500 });
  }
}

const prompt = `
Generate a realistic persona for a new user signing up to a scenario-based learning app.
Include:
- Display name (first name only)
- Role description (e.g. 'Product Manager')
- Company type (e.g. 'Fintech startup')
- Country (e.g. 'India', 'Nigeria', 'Indonesia')
- Knowhow goal (e.g. 'Improving stakeholder alignment in product launches')

Prioritize names from South Asia, Southeast Asia, Africa, and Latin America.
Avoid UK, US, and European names.
Make each persona sound curious, motivated, and professionally engaged.
Return JSON only.
`;

async function fetchGeminiPersona() {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await response.json();
  const jsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  return JSON.parse(jsonText);
}

type Persona = {
  email: string;
  display_name: string;
  role_description: string;
  company_type: string;
  country: string;
  knowhow_goal: string;
};

async function insertIntoAiven(persona: Persona): Promise<string> {
  const {
    email,
    display_name,
    role_description,
    company_type,
    country,
    knowhow_goal
  } = persona;

  const query = `
    INSERT INTO users (
      email, display_name, role_description, company_type,
      country, knowhow_goal, real_or_not, status, trial_start
    ) VALUES (
      $1, $2, $3, $4, $5, $6, FALSE, 'trial', NOW()
    ) RETURNING id;
  `;
  const result = await db.query(query, [
    email,
    display_name,
    role_description,
    company_type,
    country,
    knowhow_goal
  ]);
  return result.rows[0].id;
}

async function logCronEvent(user_id: string) {
  const query = `INSERT INTO cron_log (user_id) VALUES ($1);`;
  await db.query(query, [user_id]);
}
