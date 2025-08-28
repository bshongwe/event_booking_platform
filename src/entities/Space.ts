import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Venue } from "./Venue";
import { Booking } from "./Booking";

@Entity()
export class Space {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  gla!: boolean;

  @ManyToOne(() => Venue, venue => venue.spaces)
  venue!: Venue;

  @OneToMany(() => Booking, booking => booking.space)
  bookings!: Booking[];
}