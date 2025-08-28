import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Role } from "./Role";
import { Venue } from "./Venue";
import { Booking } from "./Booking";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @ManyToOne(() => Role, role => role.users)
  role!: Role;

  @OneToMany(() => Venue, venue => venue.owner)
  venues!: Venue[];

  @OneToMany(() => Booking, booking => booking.vendor)
  bookings!: Booking[];
}