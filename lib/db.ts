// lib/db.ts
import { sql } from '@vercel/postgres';

export const db = {
  query: (text: string, params?: any[]) => sql.query(text, params),
};