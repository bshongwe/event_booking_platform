/**
 * Booking model for API typing and usage.
 * Mirrors the Booking entity.
 */
export interface Booking {
  id: string;
  vendor: User;
  space: Space;
  event: Event;
}

import { User } from "./User";
import { Space } from "./Space";
import { Event } from "./Event";
