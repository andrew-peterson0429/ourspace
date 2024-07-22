import { Hono } from 'hono';
import { database } from '@/middleware/db';
import { env } from '@/utils/env';
import user from '@/routes/api/user';

const app = new Hono();

app.use(database);
const api = app.basePath('/v1/api').route('/user', user);

export default {
	port: env.PORT ?? 8000,
	fetch: app.fetch
};

export type Api = typeof api;
