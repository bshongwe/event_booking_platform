/**
 * Role model for API typing and usage.
 * Mirrors the Role entity.
 */
export interface Role {
  id: string;
  name: string;
  users?: User[];
}

import { User } from "./User";
