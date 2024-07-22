import { z } from 'zod';

const EnvSchema = z.object({
	PORT: z.string(),
	RESEND_API_KEY: z.string(),
	PG_HOST: z.string(),
	PG_PORT: z.string(),
	PG_USER: z.string(),
	PG_PASS: z.string(),
	PG_DATABASE: z.string()
});

export const env = EnvSchema.parse(Bun.env);
