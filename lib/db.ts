import { Pool } from 'pg';

declare global {
  var pgPool: Pool | undefined;
}

const isDev = process.env.NODE_ENV !== 'production';

const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isDev
      ? { rejectUnauthorized: false } // ✅ Dev: bypass cert chain
      : { rejectUnauthorized: true, ca: process.env.AIVEN_CA_CERT }, // ✅ Prod: strict CA
    max: 20,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 5000,
  });

if (!global.pgPool) {
  global.pgPool = pool;
}

export const logPoolStats = () => {
  console.log("🧠 Pool stats:", {
    total: pool.totalCount,
    idle: pool.idleCount,
    waiting: pool.waitingCount,
  });
};

export const db = {
  query: (text: string, params?: unknown[]) => pool.query(text, params),
  connect: () => pool.connect(),
};
