// lib/db.ts - OPTIMIZED FOR AIVEN
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
  //console.log('✅ Loaded CA cert from ca.pem');
} catch {
  console.warn('⚠️ No ca.pem found. SSL validation disabled.');
  sslConfig = { rejectUnauthorized: false };
}

// SMALL POOL FOR AIVEN'S CONNECTION LIMITS
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: sslConfig,
  // CRITICAL: Small pool for Aiven's cheap plans
  max: 3, // Maximum number of clients in the pool (reduced from 20)
  idleTimeoutMillis: 10000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 5000, // How long to wait for a connection
});

// Export the pool with both query and connect methods
export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(), // Add this method for manual connection management
  end: () => pool.end(), // For graceful shutdown
};