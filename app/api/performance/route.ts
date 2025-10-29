import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

type ModuleData = {
  moduleId: number;
  scenariosCompleted: number;
  averageScore: number;
};

export async function POST(request: NextRequest) {
  try {
    const { performanceData, email } = await request.json();

    console.log('in api/performance, email', email);

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 401 });
    }

    const userResult = await db.query(
      `SELECT id, email, trial_start, status 
       FROM users 
       WHERE email = $1`,
      [email]
    );

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const user = userResult.rows[0];
    console.log(`Syncing performance data for user ${email}:`);
    console.log(`User ${user.id} ready for sync (trial: ${user.status})`);

    // Fetch existing performance data
    const existingResult = await db.query(
      `SELECT module_id, scenarios_completed, average_score
       FROM user_performance
       WHERE user_id = $1`,
      [user.id]
    );

    const existingMap = new Map<number, { scenariosCompleted: number; averageScore: number }>();
    for (const row of existingResult.rows) {
      existingMap.set(row.module_id, {
        scenariosCompleted: row.scenarios_completed,
        averageScore: row.average_score,
      });
    }

    // Filter only changed modules
    const changedModules = performanceData.filter(
      ({ moduleId, scenariosCompleted, averageScore }: ModuleData) => {
        const existing = existingMap.get(moduleId);
        if (!existing) return true;
        return (
          scenariosCompleted > existing.scenariosCompleted ||
          (scenariosCompleted === existing.scenariosCompleted &&
           averageScore > existing.averageScore)
        );
      }
    );

    console.log(`📦 Incoming modules: ${performanceData.length}`);
    console.log(`🔍 Changed modules: ${changedModules.map((m: ModuleData) => m.moduleId).join(', ')}`);

    // Update only changed modules
    for (const moduleData of changedModules) {
      console.log(`🛠 Updating module ${moduleData.moduleId} for user ${user.id}`);
      try {
        await db.query(
          `INSERT INTO user_performance (
            user_id, 
            module_id, 
            scenarios_completed, 
            average_score, 
            last_updated
          ) VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT (user_id, module_id) 
          DO UPDATE SET 
            scenarios_completed = GREATEST(user_performance.scenarios_completed, EXCLUDED.scenarios_completed),
            average_score = CASE 
              WHEN EXCLUDED.scenarios_completed > user_performance.scenarios_completed 
              THEN EXCLUDED.average_score
              WHEN EXCLUDED.scenarios_completed = user_performance.scenarios_completed 
              THEN GREATEST(user_performance.average_score, EXCLUDED.average_score)
              ELSE user_performance.average_score
            END,
            last_updated = CURRENT_TIMESTAMP`,
          [
            user.id,
            moduleData.moduleId,
            moduleData.scenariosCompleted,
            moduleData.averageScore,
            new Date().toISOString(),
          ]
        );
      } catch (error) {
        console.error(`❌ Failed to update module ${moduleData.moduleId}:`, error);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Performance data synced',
      modulesUpdated: changedModules.length,
    });

  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 401 });
    }

    const userResult = await db.query(
      `SELECT id, email, trial_start, status 
       FROM users 
       WHERE email = $1`,
      [email]
    );

    if (userResult.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const user = userResult.rows[0];
    console.log(`Fetching performance data for user ${email}`);
    console.log(`User ${user.id} fetched (trial: ${user.status})`);

    const result = await db.query(
      `SELECT 
        module_id as "moduleId",
        scenarios_completed as "scenariosCompleted",
        average_score as "averageScore",
        last_updated as "lastUpdated"
      FROM user_performance 
      WHERE user_id = $1
      ORDER BY module_id`,
      [user.id]
    );

    const performanceData = result.rows;

    const fullPerformanceData = Array.from({ length: 49 }, (_, index) => {
      const moduleId = index + 1;
      const existing = performanceData.find(p => p.moduleId === moduleId);

      return existing || {
        moduleId,
        scenariosCompleted: 0,
        averageScore: 0,
        lastUpdated: new Date().toISOString(),
      };
    });

    console.log(`Fetched ${performanceData.length} modules from DB, returning ${fullPerformanceData.length} total modules`);

    return NextResponse.json({ performanceData: fullPerformanceData });

  } catch (error) {
    console.error('Fetch performance error:', error);
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
