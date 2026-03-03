import { createError, type H3Event } from 'h3';

export interface UserSession {
  id: number;
  email?: string;
  name?: string;
}

/**
 * Placeholder de sesión.
 * Más adelante se deberá conectar con el sistema real de autenticación
 * (GitHub OAuth + credenciales locales) y devolver el usuario autenticado.
 */
export async function requireUserSession(_event: H3Event): Promise<UserSession> {
  // TODO: Reemplazar por lectura real de la sesión (cookies / tokens, etc.)
  const userId = 1;

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  return { id: userId };
}

