import { AppDataSource } from "../src/config/data-source";
import { Role } from "../src/entities/Role";

/**
 * Seed script for inserting default roles into the database.
 * Roles: venue-owner, event-organiser, vendor.
 * Usage: npx ts-node seeds/seedRoles.ts
 */
const seedRoles = async () => {
  await AppDataSource.initialize();
  const roleRepo = AppDataSource.getRepository(Role);

  const roles = ["venue-owner", "event-organiser", "vendor"];
  for (const role of roles) {
    const exists = await roleRepo.findOneBy({ name: role });
    if (!exists) {
      const newRole = roleRepo.create({ name: role });
      await roleRepo.save(newRole);
      console.log(`Role '${role}' created`);
    }
  }
  await AppDataSource.destroy();
};

seedRoles();
