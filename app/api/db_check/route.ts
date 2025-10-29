import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const result = await db.query('SELECT NOW()');
    return NextResponse.json({ status: 'success', time: result.rows[0].now });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    console.error('DB error:', message);
    return NextResponse.json({ status: 'error', message }, { status: 500 });
  }
}
