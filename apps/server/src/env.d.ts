import type { DB, Schema } from '@ourspace/orm';

declare module 'hono' {
	interface Context {
		db: DB;
		schema: Schema;
	}
}
