// lib/db.ts - FIXED EXPORT
import { Pool } from 'pg';

const getSSLConfig = () => {
  // In production, use simple SSL config
  if (process.env.NODE_ENV === 'production') {
    return { rejectUnauthorized: false };
  }
  
  // In development, try to use ca.pem but fail gracefully
  try {
    const fs = require('fs');
    const path = require('path');
    const caPath = path.join(process.cwd(), 'lib', 'ca.pem');
    
    if (fs.existsSync(caPath)) {
      const ca = fs.readFileSync(caPath, 'utf8').trim();
      return { ca, rejectUnauthorized: true };
    }
  } catch {
    // Empty catch - filesystem not available
  }
  
  return { rejectUnauthorized: false };
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: getSSLConfig(),
  max: 3,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000,
});

// FIXED EXPORT - Make sure this is properly exported
export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end(),
};

// Also export pool directly if needed
export { pool };