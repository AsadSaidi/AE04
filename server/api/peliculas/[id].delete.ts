import { defineEventHandler, createError } from 'h3';
import { and, eq } from 'drizzle-orm';
import { db } from '~/server/db/client';
import { movies } from '~/server/db/schema';
import { requireUserSession } from '~/server/utils/session';

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

  const result = await db
    .delete(movies)
    .where(and(eq(movies.id, id), eq(movies.userId, user.id)))
    .run();

  if (result.changes === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Película no encontrada',
    });
  }

  return { success: true };
});

