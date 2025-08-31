import { AppDataSource } from "../src/config/data-source";
import { User } from "../src/entities/User";
import { Role } from "../src/entities/Role";
import { Venue } from "../src/entities/Venue";
import { Space } from "../src/entities/Space";
import { Event } from "../src/entities/Event";
import { Booking } from "../src/entities/Booking";

/**
 * Comprehensive seed script for populating the database with sample data.
 * Inserts roles, users, venues, spaces, events, and bookings for endpoint testing.
 * Usage: npx ts-node seeds/seedAll.ts
 */
const seedAll = async () => {
  await AppDataSource.initialize();

  // Seed Roles
  const roleRepo = AppDataSource.getRepository(Role);
  const roles = ["venue-owner", "event-organiser", "vendor"];
  const roleEntities = [];
  for (const role of roles) {
    let roleEntity = await roleRepo.findOneBy({ name: role });
    if (!roleEntity) {
      roleEntity = roleRepo.create({ name: role });
      await roleRepo.save(roleEntity);
    }
    roleEntities.push(roleEntity);
  }

  // Seed Users
  const userRepo = AppDataSource.getRepository(User);
  const bcrypt = require('bcryptjs');
  const usersData = [
    { name: "Alice", email: "alice@example.com", password: "password1", role: roleEntities[0] },
    { name: "Bob", email: "bob@example.com", password: "password2", role: roleEntities[1] },
    { name: "Charlie", email: "charlie@example.com", password: "password3", role: roleEntities[2] },
  ];
  const userEntities = [];
  for (const user of usersData) {
    let userEntity = await userRepo.findOneBy({ email: user.email });
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    if (!userEntity) {
      userEntity = userRepo.create({ ...user, password: hashedPassword });
      await userRepo.save(userEntity);
    } else {
      userEntity.name = user.name;
      userEntity.password = hashedPassword;
      userEntity.role = user.role;
      await userRepo.save(userEntity);
    }
    userEntities.push(userEntity);
  }

  // Seed Venues
  const venueRepo = AppDataSource.getRepository(Venue);
  const venuesData = [
    { name: "Grand Hall", location: "123 Main St", owner: userEntities[0] },
    { name: "Expo Center", location: "456 Market Ave", owner: userEntities[0] },
  ];
  const venueEntities = [];
  for (const venue of venuesData) {
    let venueEntity = await venueRepo.findOneBy({ name: venue.name });
    if (!venueEntity) {
      venueEntity = venueRepo.create(venue);
      await venueRepo.save(venueEntity);
    }
    venueEntities.push(venueEntity);
  }

  // Seed Spaces
  const spaceRepo = AppDataSource.getRepository(Space);
  const spacesData = [
    { name: "VIP Room", venue: venueEntities[0] },
    { name: "Main Floor", venue: venueEntities[0] },
    { name: "Conference Room", venue: venueEntities[1] },
  ];
  const spaceEntities = [];
  for (const space of spacesData) {
    let spaceEntity = await spaceRepo.findOneBy({ name: space.name });
    if (!spaceEntity) {
      spaceEntity = spaceRepo.create(space);
      await spaceRepo.save(spaceEntity);
    }
    spaceEntities.push(spaceEntity);
  }

  // Seed Events
  const eventRepo = AppDataSource.getRepository(Event);
  const eventsData = [
    { name: "Annual Gala", date: "2025-12-31", organiser: userEntities[1], venue: venueEntities[0] },
    { name: "Tech Expo", date: "2025-11-15", organiser: userEntities[1], venue: venueEntities[1] },
  ];
  const eventEntities = [];
  for (const event of eventsData) {
    let eventEntity = await eventRepo.findOneBy({ name: event.name });
    if (!eventEntity) {
      eventEntity = eventRepo.create(event);
      await eventRepo.save(eventEntity);
    }
    eventEntities.push(eventEntity);
  }

  // Seed Bookings
  const bookingRepo = AppDataSource.getRepository(Booking);
  const bookingsData = [
    { vendor: userEntities[2], space: spaceEntities[0], event: eventEntities[0] },
    { vendor: userEntities[2], space: spaceEntities[2], event: eventEntities[1] },
  ];
  for (const booking of bookingsData) {
    const exists = await bookingRepo.findOneBy({ space: booking.space, event: booking.event });
    if (!exists) {
      const newBooking = bookingRepo.create(booking);
      await bookingRepo.save(newBooking);
    }
  }

  await AppDataSource.destroy();
  console.log("Seeding complete.");
};

seedAll();
