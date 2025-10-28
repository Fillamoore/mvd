// app/api/test-db/route.ts
import { Pool } from 'pg';

export async function GET() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 1,
  });

  try {
    console.log('🔗 Testing DB connection...');
    const client = await pool.connect();
    
    const result = await client.query('SELECT version(), current_database()');
    client.release();
    
    return Response.json({
      success: true,
      database: result.rows[0],
      environment: process.env.NODE_ENV,
      hasDbUrl: !!process.env.DATABASE_URL,
    });
  } catch (error: any) {
    console.error('💥 DB Connection failed:', error);
    return Response.json({
      success: false,
      error: error.message,
      code: error.code,
      environment: process.env.NODE_ENV,
      hasDbUrl: !!process.env.DATABASE_URL,
    }, { status: 500 });
  } finally {
    await pool.end();
  }
}