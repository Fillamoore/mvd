// lib/db.ts - WORKS IN DEV & PRODUCTION
import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

const getSSLConfig = () => {
  // Always use simple SSL in production
  if (process.env.NODE_ENV === 'production') {
    return { rejectUnauthorized: false };
  }
  
  // In development, try to use ca.pem but only if filesystem is available
  if (typeof window === 'undefined') {
    // Server-side: try to read the file
    try {
      const caPath = path.join(process.cwd(), 'lib', 'ca.pem');
      // Check if file exists before trying to read
      if (fs.existsSync(caPath)) {
        const ca = fs.readFileSync(caPath, 'utf8').trim();
        return { ca, rejectUnauthorized: true };
      }
    } catch (error) {
      // Silent fail - filesystem not available (serverless)
    }
  }
  
  // Fallback for both dev (no ca.pem) and production
  return { rejectUnauthorized: false };
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: getSSLConfig(),
  max: 3,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000,
});

pool.on('connect', () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('✅ Database connected');
  }
});

pool.on('error', (err) => {
  console.error('💥 Database pool error:', err);
});

export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end(),
};