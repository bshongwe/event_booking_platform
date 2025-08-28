import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { User } from "./User";
import { Space } from "./Space";
import { Event } from "./Event";

@Entity()
@Unique(["space", "event"])
export class Booking {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, user => user.bookings)
  vendor!: User;

  @ManyToOne(() => Space, space => space.bookings)
  space!: Space;

  @ManyToOne(() => Event, event => event.bookings)
  event!: Event;
}