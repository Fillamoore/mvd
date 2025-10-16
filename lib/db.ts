import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

let sslConfig: boolean | object = false;

try {
  const ca = fs.readFileSync(path.join(process.cwd(), 'lib', 'ca.pem'), 'utf8').trim();
  sslConfig = {
    ca,
    rejectUnauthorized: true
  };
  console.log('✅ Loaded CA cert from ca.pem');
} catch {
  console.warn('⚠️ No ca.pem found. SSL validation disabled.');
  sslConfig = { rejectUnauthorized: false };
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: sslConfig
});

export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
};
