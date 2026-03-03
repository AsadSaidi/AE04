export interface FrontendUserSession {
  id: number;
  email?: string;
  name?: string;
}

/**
 * Placeholder de sesión para el frontend.
 * Más adelante se debe conectar con el sistema real de autenticación.
 */
export const useUserSession = () =>
  useState<FrontendUserSession | null>('user-session', () => ({
    id: 1,
    name: 'Demo User',
    email: 'demo@example.com',
  }));

