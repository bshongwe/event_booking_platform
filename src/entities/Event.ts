import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Unique } from "typeorm";
import { User } from "./User";
import { Venue } from "./Venue";
import { Booking } from "./Booking";

@Entity()
@Unique(["name", "date", "venue"])
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("date")
  date: string;

  @ManyToOne(() => User, user => user.id)
  organiser: User;

  @ManyToOne(() => Venue, venue => venue.id)
  venue: Venue;

  @OneToMany(() => Booking, booking => booking.event)
  bookings: Booking[];
}