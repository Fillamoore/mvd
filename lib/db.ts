import { Pool } from 'pg';

declare global {
  var pgPool: Pool | undefined;
}

const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      ca: process.env.AIVEN_CA_CERT,
    },
    max: 3,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 5000,
  });

if (!global.pgPool) {
  global.pgPool = pool;
}

export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(),
};
