import { Hono } from 'hono';

export default new Hono().get('/', async (c) => {
	return c.json(await c.db.query.user.findMany());
});
