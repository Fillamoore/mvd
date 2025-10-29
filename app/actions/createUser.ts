'use server';

import { db } from '@/lib/db';

export async function createUser(email: string): Promise<{ success: boolean; error?: string }> {
  console.log("🎯 createUser called with email:", email);
  console.log("📦 NODE_ENV:", process.env.NODE_ENV);
  console.log("🔗 DATABASE_URL exists:", !!process.env.DATABASE_URL);

  let client;
  try {
    console.log("🔑 Attempting to get DB connection...");
    client = await db.connect();
    console.log("✅ Got DB connection");

    try {
      console.log("🚀 Starting transaction");
      await client.query('BEGIN');

      console.log("👤 Checking for existing user...");
      const existingUser = await client.query(
        `SELECT id FROM users WHERE email = $1`,
        [email]
      );
      console.log(`📊 Found ${existingUser.rows.length} existing users`);

      if (existingUser.rows.length > 0) {
        console.log("✅ User exists, committing and returning");
        await client.query('COMMIT');
        return { success: true };
      }

      console.log("👤 Creating new user...");
      const result = await client.query(`
        INSERT INTO users (email, created_at)
        VALUES ($1, NOW())
        RETURNING id
      `, [email]);
      const user_id = result.rows[0].id;
      console.log("✅ User created with ID:", user_id);

      console.log("📈 Creating performance records...");
      for (let moduleId = 1; moduleId <= 49; moduleId++) {
        await client.query(`
          INSERT INTO user_performance (user_id, module_id, scenarios_completed, average_score)
          VALUES ($1, $2, 0, 0)`,
          [user_id, moduleId]
        );
      }

      await client.query('COMMIT');
      console.log("🎉 Transaction committed successfully");
      return { success: true };

    } catch (innerError) {
      console.error("💥 Inner error:", innerError);
      try {
        await client.query('ROLLBACK');
        console.log("↩️ Transaction rolled back");
      } catch (rollbackError) {
        const msg = rollbackError instanceof Error ? rollbackError.message : String(rollbackError);
        console.warn("⚠️ Rollback failed:", msg);
      }
      throw innerError;
    } finally {
      try {
        client.release();
        console.log("🔓 Connection released");
      } catch (releaseError) {
        const msg = releaseError instanceof Error ? releaseError.message : String(releaseError);
        console.warn("⚠️ Release failed (already released?):", msg);
      }
    }

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('💥 FATAL ERROR in createUser:', error);
    return {
      success: false,
      error: `Database error: ${message}`
    };
  }
}
