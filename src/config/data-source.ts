import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Role } from "../entities/Role";
import { Venue } from "../entities/Venue";
import { Space } from "../entities/Space";
import { Event } from "../entities/Event";
import { Booking } from "../entities/Booking";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Role, Venue, Space, Event, Booking],
  migrations: ["migrations/*.ts"],
  subscribers: [],
});