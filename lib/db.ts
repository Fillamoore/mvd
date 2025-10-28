// lib/db.ts - FIXED FOR PRODUCTION
import { Pool } from 'pg';

// SIMPLIFIED SSL CONFIG - NO FILE SYSTEM ACCESS
const getSSLConfig = () => {
  // In production, always use SSL but don't try to read files
  if (process.env.NODE_ENV === 'production') {
    return {
      rejectUnauthorized: false // Critical for Aiven in production
    };
  }
  
  // In development, use your existing logic
  try {
    const fs = require('fs');
    const path = require('path');
    const ca = fs.readFileSync(path.join(process.cwd(), 'lib', 'ca.pem'), 'utf8').trim();
    return {
      ca,
      rejectUnauthorized: true
    };
  } catch {
    console.warn('⚠️ No ca.pem found. SSL validation disabled.');
    return { rejectUnauthorized: false };
  }
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: getSSLConfig(), // Use the new function
  max: 3,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000,
});

// Add connection logging for debugging
pool.on('connect', () => {
  console.log('✅ Database connected');
});

pool.on('error', (err) => {
  console.error('💥 Database pool error:', err);
});

export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end(),
};