export const config = {
  schedule: '* * * * *' // every minute
};

export default async function handler(req, res) {
  if (process.env.ENABLE_SPOOFING !== 'true') {
    return res.status(200).send('Spoofing disabled');
  }

  // Randomize target interval between 10–30 minutes
  const targetInterval = Math.floor(Math.random() * 21) + 10;
  const shouldRun = Math.random() < 1 / targetInterval;

  if (!shouldRun) {
    return res.status(200).send(`Skipped this run (target interval: ${targetInterval} min)`);
  }

  try {
    const persona = await fetchGeminiPersona();
    const email = `${persona.display_name.toLowerCase()}_${Date.now()}@example.com`;

    const user_id = await insertIntoAiven({ ...persona, email });
    await logCronEvent(user_id);

    res.status(200).send(`Spoofed signup inserted (target interval: ${targetInterval} min)`);
  } catch (err) {
    console.error('Cron error:', err);
    res.status(500).send('Cron failed');
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

async function insertIntoAiven({ email, display_name, role_description, company_type, country, knowhow_goal }) {
  const query = `
    INSERT INTO users (
      email, display_name, role_description, company_type,
      country, knowhow_goal, real_or_not, status, trial_start
    ) VALUES (
      $1, $2, $3, $4, $5, $6, FALSE, 'trial', NOW()
    ) RETURNING id;
  `;
  const result = await db.query(query, [email, display_name, role_description, company_type, country, knowhow_goal]);
  return result.rows[0].id;
}

async function logCronEvent(user_id) {
  const query = `
    INSERT INTO cron_log (user_id) VALUES ($1);
  `;
  await db.query(query, [user_id]);
}
