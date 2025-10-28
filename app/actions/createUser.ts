// app/actions/createUser.ts
'use server';

import { db } from '@/lib/db';

export async function createUser(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if user already exists - SIMPLE QUERY
    const existingUser = await db.query(
      `SELECT id FROM users WHERE email = $1`, 
      [email]
    );

    if (existingUser.rows.length > 0) {
      // User exists - do nothing and return success
      return { success: true };
    }

    // Create the user row
    const result = await db.query(`
      INSERT INTO users (email, created_at)
      VALUES ($1, NOW())
      RETURNING id
    `, [email]);

    // Create the performance rows for new user
    const user_id = result.rows[0].id;
    for (let moduleId = 1; moduleId <= 49; moduleId++) {
      await db.query(`
        INSERT INTO user_performance (user_id, module_id, scenarios_completed, average_score)
        VALUES ($1, $2, $3, $4)`,
        [user_id, moduleId, 0, 0]
      );
    }

    return { success: true };
  
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: 'createUser.ts failed to create user' };
  }
}