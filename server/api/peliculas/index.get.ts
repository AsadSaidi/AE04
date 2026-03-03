import { defineEventHandler } from 'h3';
import { eq } from 'drizzle-orm';
import { db } from '~/server/db/client';
import { movies } from '~/server/db/schema';
import { requireUserSession } from '~/server/utils/session';

export default defineEventHandler(async (event) => {
  const user = await requireUserSession(event);

  const rows = await db
    .select()
    .from(movies)
    .where(eq(movies.userId, user.id));

  return rows;
});

