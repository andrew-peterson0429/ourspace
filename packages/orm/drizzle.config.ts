import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/drizzle/schema/*',
	out: './src/drizzle/migrations',
	dialect: 'postgresql',
	verbose: true,
	strict: true,
	migrations: {
		schema: 'public'
	},
	dbCredentials: {
		ssl: false,
		host: '127.0.0.1',
		port: 5432,
		user: 'local_user',
		password: 'local_pass',
		database: 'vault'
	}
});
