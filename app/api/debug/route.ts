// app/api/debug/route.ts - FIXED VERSION
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
  } catch (error: unknown) {
    const err = error as Error;
    return Response.json({
      status: 'ERROR',
      message: err.message,
      // @ts-ignore - code might not exist on Error
      code: err.code,
      // @ts-ignore - stack might not exist
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }, { status: 500 });
  }
}