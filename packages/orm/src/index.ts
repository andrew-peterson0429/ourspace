import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool, type PoolConfig } from 'pg';
import * as schema from '@/drizzle/schema';

export const initDatabase = async (config: PoolConfig) => {
	const pool = new Pool(config);

	await pool.connect();

	const db = drizzle(pool, { schema });

	return { db, schema };
};

export type DB = Awaited<ReturnType<typeof initDatabase>>['db'];
export type Schema = typeof schema;
