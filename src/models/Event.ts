/**
 * Event model for API typing and usage.
 * Mirrors the Event entity.
 */
export interface Event {
  id: string;
  name: string;
  date: string;
  organiser: User;
  venue: Venue;
  bookings?: Booking[];
}


/**
 * Minimal type declarations for User, Venue, and Booking to resolve type errors.
 * Replace with imports if/when TypeScript resolves them.
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
}

export interface Booking {
  id: string;
}
