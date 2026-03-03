import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dbCredentials: {
    // La base de datos SQLite se guardará en esta ruta relativa
    url: './data/database.sqlite',
  },
});

