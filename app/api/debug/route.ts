// app/api/debug/route.ts
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Test basic connection
    const test = await db.query('SELECT version(), current_database()');
    
    // Test environment
    const env = {
      nodeEnv: process.env.NODE_ENV,
      hasDbUrl: !!process.env.DATABASE_URL,
      dbUrlLength: process.env.DATABASE_URL?.length || 0,
      dbUrlStart: process.env.DATABASE_URL?.substring(0, 20) || 'none'
    };
    
    return Response.json({
      status: 'connected',
      database: test.rows[0],
      environment: env
    });
  } catch (error: any) {
    return Response.json({
      status: 'ERROR',
      message: error.message,
      code: error.code,
      stack: error.stack
    }, { status: 500 });
  }
}