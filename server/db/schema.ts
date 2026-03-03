import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Tabla de usuarios base
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at')
    .notNull()
    .default(sql`(strftime('%s','now'))`),
});

// Tabla de peliculas
export const movies = sqliteTable('movies', {
  id: integer('id').primaryKey({ autoIncrement: true }),

  title: text('title').notNull(),
  year: integer('year').notNull(),
  genre: text('genre').notNull(),
  director: text('director').notNull(),
  budget: integer('budget').notNull(),
  studio: text('studio').notNull(),

  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),

  createdAt: integer('created_at')
    .notNull()
    .default(sql`(strftime('%s','now'))`),
});

