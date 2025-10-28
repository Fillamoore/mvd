// app/actions/createUser.ts
'use server';

import { db } from '@/lib/db';

export async function createUser(email: string) {
  const client = await db.connect();
  
  try {
    await client.query('BEGIN');

    // Check if user exists
    const existingUser = await client.query(
      'SELECT id FROM users WHERE email = $1', 
      [email]
    );

    if (existingUser.rows.length > 0) {
      await client.query('COMMIT');
      client.release();
      return { success: true };
    }

    // Create user
    const newUser = await client.query(
      'INSERT INTO users (email, created_at) VALUES ($1, NOW()) RETURNING id',
      [email]
    );
    const userId = newUser.rows[0].id;

    // Create performance records
    for (let i = 1; i <= 49; i++) {
      await client.query(
        'INSERT INTO user_performance (user_id, module_id, scenarios_completed, average_score) VALUES ($1, $2, 0, 0)',
        [userId, i]
      );
    }

    await client.query('COMMIT');
    return { success: true };
    
  } catch (error) {
    await client.query('ROLLBACK');
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  } finally {
    client.release();
  }
}