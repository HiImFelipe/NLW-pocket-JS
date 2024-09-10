import { defineConfig } from 'drizzle-kit';
import { env } from './src/env';

export default defineConfig({
  schema: './src/database/schema.ts',
  out: './.migrations',
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase',
  },
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
