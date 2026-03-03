import { defineEventHandler, readBody, createError } from 'h3';
import { and, eq } from 'drizzle-orm';
import { z } from 'zod';
import { db } from '~/server/db/client';
import { movies } from '~/server/db/schema';
import { requireUserSession } from '~/server/utils/session';

const MovieUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  year: z.number().int().min(1800).max(3000).optional(),
  genre: z.string().min(1).optional(),
  director: z.string().min(1).optional(),
  budget: z.number().int().nonnegative().optional(),
  studio: z.string().min(1).optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireUserSession(event);
  const idParam = event.context.params?.id;
  const id = Number(idParam);

  if (!idParam || Number.isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID inválido',
    });
  }

  const body = await readBody(event);
  const parsed = MovieUpdateSchema.safeParse(body);

  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Datos inválidos',
      data: parsed.error.flatten(),
    });
  }

  if (Object.keys(parsed.data).length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No hay campos para actualizar',
    });
  }

  const [updated] = await db
    .update(movies)
    .set(parsed.data)
    .where(and(eq(movies.id, id), eq(movies.userId, user.id)))
    .returning();

  if (!updated) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Película no encontrada',
    });
  }

  return updated;
});

