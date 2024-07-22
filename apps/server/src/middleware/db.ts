import { initDatabase } from '@ourspace/orm';
import { createMiddleware } from 'hono/factory';
import { env } from '@/utils/env';
import type { Context, Next } from 'hono';

export const database = createMiddleware(async (c: Context, next: Next) => {
	try {
		const { db, schema } = await initDatabase({
			ssl: Bun.env.NODE_ENV === 'production' ? true : false,
			host: env.PG_HOST,
			port: Number(env.PG_PORT),
			user: env.PG_USER,
			password: env.PG_PASS,
			database: env.PG_DATABASE
		});
		c.db = db;
		c.schema = schema;
		await next();
	} catch (e) {
		console.log(e);
		c.status(500);
		return c.text('There was an error while connecting to the database.');
	}
});
