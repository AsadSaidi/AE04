import { defineEventHandler, readBody, createError } from 'h3';
import { z } from 'zod';
import { db } from '~/server/db/client';
import { movies } from '~/server/db/schema';
import { requireUserSession } from '~/server/utils/session';

const MovieCreateSchema = z.object({
  title: z.string().min(1),
  year: z.number().int().min(1800).max(3000),
  genre: z.string().min(1),
  director: z.string().min(1),
  budget: z.number().int().nonnegative(),
  studio: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireUserSession(event);
  const body = await readBody(event);

  const parsed = MovieCreateSchema.safeParse(body);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Datos inválidos',
      data: parsed.error.flatten(),
    });
  }

  const [created] = await db
    .insert(movies)
    .values({
      ...parsed.data,
      userId: user.id,
    })
    .returning();

  return created;
});

