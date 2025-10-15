// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Now with ?sslmode=no-verify
  // No need for ssl config - handled by connection string
});

export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};