/**
 * Seed script for inserting default roles into the database.
 * Roles: venue-owner, event-organiser, vendor.
 * Usage: node seeds/seedRoles.js
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../src/config/data-source");
const Role_1 = require("../src/entities/Role");
const seedRoles = async () => {
    await data_source_1.AppDataSource.initialize();
    const roleRepo = data_source_1.AppDataSource.getRepository(Role_1.Role);
    const roles = ["venue-owner", "event-organiser", "vendor"];
    for (const role of roles) {
        const exists = await roleRepo.findOneBy({ name: role });
        if (!exists) {
            const newRole = roleRepo.create({ name: role });
            await roleRepo.save(newRole);
            console.log(`Role '${role}' created`);
        }
    }
    await data_source_1.AppDataSource.destroy();
};
seedRoles();
