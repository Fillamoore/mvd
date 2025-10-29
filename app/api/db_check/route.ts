// pages/api/db-check.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await db.query('SELECT NOW()'); // simple connectivity test
    res.status(200).json({ status: 'success', time: result.rows[0].now });
  } catch (error: any) {
    console.error('DB error:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
}
