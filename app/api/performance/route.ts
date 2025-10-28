// app/api/performance/route.ts - SIMPLIFIED FOR AIVEN
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { performanceData, email } = await request.json();
    
    console.log('in api/performance, email', email);
  
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 401 });
    }

    // SIMPLE QUERY - let the pool handle connections
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
    
    // Update database with performance data using smart conflict resolution
    for (const moduleData of performanceData) {
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
          [user.id, moduleData.moduleId, moduleData.scenariosCompleted, moduleData.averageScore, new Date().toISOString()]
        );
      } catch (error) {
        console.error(`Failed to update module ${moduleData.moduleId}:`, error);
        // Continue with other modules even if one fails
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Performance data synced',
      modulesUpdated: performanceData.length
    });
    
  } catch (error) {
    console.error('Sync error:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get email from query parameter
    const url = new URL(request.url);
    const email = url.searchParams.get('email');
    
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 401 });
    }

    // SIMPLE QUERY - let the pool handle connections
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
    
    // Fetch performance data
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
    
    // Ensure we have all 49 modules (return defaults for missing ones)
    const fullPerformanceData = Array.from({ length: 49 }, (_, index) => {
      const moduleId = index + 1;
      const existing = performanceData.find(p => p.moduleId === moduleId);
      
      return existing || {
        moduleId,
        scenariosCompleted: 0,
        averageScore: 0,
        lastUpdated: new Date().toISOString()
      };
    });
    
    console.log(`Fetched ${performanceData.length} modules from DB, returning ${fullPerformanceData.length} total modules`);
    
    return NextResponse.json({ performanceData: fullPerformanceData });
    
  } catch (error) {
    console.error('Fetch performance error:', error);
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}