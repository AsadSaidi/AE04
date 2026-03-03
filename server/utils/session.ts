import { createError, type H3Event } from 'h3';

export interface UserSession {
  id: number;
  email?: string;
  name?: string;
}

export async function requireUserSession(_event: H3Event): Promise<UserSession> {
  const userId = 1;

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  return { id: userId };
}

