
/**
 * Minimal type declarations for Venue and Booking to resolve type errors.
 * Replace with imports if/when TypeScript resolves them.
 */
export interface Venue {
  id: string;
  name: string;
  location: string;
}

export interface Booking {
  id: string;
}

/**
 * Space model for API typing and usage.
 * Mirrors the Space entity.
 */
export interface Space {
  id: string;
  name: string;
  gla?: boolean;
  venue: Venue;
  bookings?: Booking[];
}
