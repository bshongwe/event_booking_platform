/**
 * User model for API typing and usage.
 * Mirrors the User entity.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  venues?: Venue[];
  bookings?: Booking[];
}


/**
 * Minimal type declarations for Role, Venue, and Booking to resolve type errors.
 * Replace with imports if/when TypeScript resolves them.
 */
export interface Role {
  id: string;
  name: string;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
}

export interface Booking {
  id: string;
}
