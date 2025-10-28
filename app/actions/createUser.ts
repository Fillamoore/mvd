// app/actions/createUser.ts
'use server';

import { db } from '@/lib/db';

export async function createUser(email: string): Promise<{ success: boolean; error?: string }> {
  console.log("in createUser, email:", email);
  
  const client = await db.connect(); // Get ONE connection for everything
  
  try {
    await client.query('BEGIN');

    // Check if user exists
    const existingUser = await client.query(
      `SELECT id FROM users WHERE email = $1`, 
      [email]
    );

    if (existingUser.rows.length > 0) {
      await client.query('COMMIT');
      client.release();
      return { success: true };
    }

    // Create the user
    const result = await client.query(`
      INSERT INTO users (email, created_at)
      VALUES ($1, NOW())
      RETURNING id
    `, [email]);

    // Just do the 49 inserts - they're tiny!
    const user_id = result.rows[0].id;
    for (let moduleId = 1; moduleId <= 49; moduleId++) {
      await client.query(`
        INSERT INTO user_performance (user_id, module_id, scenarios_completed, average_score)
        VALUES ($1, $2, 0, 0)`,
        [user_id, moduleId]
      );
    }

    await client.query('COMMIT');
    return { success: true };
  
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating user:', error);
    return { success: false, error: 'createUser.ts failed to create user' };
  } finally {
    client.release(); // THIS is the magic fix
  }
}