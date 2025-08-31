/**
 * Venue model for API typing and usage.
 * Mirrors the Venue entity.
 */
export interface Venue {
  id: string;
  name: string;
  location: string;
  owner: User;
  spaces?: Space[];
}


/**
 * Minimal type declarations for User and Space to resolve type errors.
 * Replace with imports if/when TypeScript resolves them.
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Space {
  id: string;
  name: string;
}
