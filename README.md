# Event Booking Platform

A TypeScript-based platform for managing events, venues, spaces, bookings, and users.

## Features
- Event creation and management
- Venue and space management
- User authentication and roles
- Booking system
- RESTful API with Swagger documentation

## Project Structure
```mermaid
graph TD
    A[seeds] -->|Seed data| B(src)
    B --> C[config]
    B --> D[controllers]
    B --> E[entities]
    B --> F[middleware]
    B --> G[models]
    B --> H[openapi]
    B --> I[routes]
    B --> J[services]
    B --> K[types]
```

## Main Models
```mermaid
classDiagram
    class Venue {
      id: string
      name: string
      location: string
      owner: User
      spaces: Space[]
    }
    class User {
      id: string
      name: string
      email: string
    }
    class Space {
      id: string
      name: string
    }
    Venue "1" -- "1" User : owner
    Venue "1" -- "*" Space : spaces
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Run the server:
   ```bash
   npm start
   ```

## API Documentation
- See `src/swagger.ts` and `src/openapi/openapi.yaml` for API docs.

## License
This project is licensed under the [MIT License](./LICENSE).
