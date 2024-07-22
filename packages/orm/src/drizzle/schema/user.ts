import { SQL, sql } from 'drizzle-orm';
import { pgTable, uuid, timestamp, text, uniqueIndex, AnyPgColumn } from 'drizzle-orm/pg-core';
import { date } from '@/utils/date';
import { uuidv7 } from 'uuidv7';

const lower = (email: AnyPgColumn): SQL => {
	return sql`lower(${email})`;
};

export const user = pgTable(
	'user',
	{
		id: uuid('id')
			.primaryKey()
			.$default(() => uuidv7()),
		createdAt: timestamp('created_at').notNull().defaultNow(),
		updatedAt: timestamp('updated_at')
			.notNull()
			.defaultNow()
			.$onUpdate(() => date.utc().toDate()),
		email: text('email').notNull(),
		firstName: text('first_name').notNull(),
		lastName: text('last_name')
	},
	(table) => ({
		emailUniqueIndex: uniqueIndex('email_index').on(lower(table.email))
	})
);
