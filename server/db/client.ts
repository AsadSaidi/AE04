import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

// Instancia única de la base de datos SQLite y cliente Drizzle
const sqlite = new Database('./data/database.sqlite');

export const db = drizzle(sqlite, { schema });

