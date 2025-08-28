import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Unique } from "typeorm";
import { User } from "./User";
import { Space } from "./Space";

@Entity()
@Unique(["name", "owner"])
export class Venue {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  location!: string;

  @ManyToOne(() => User, user => user.venues)
  owner!: User;

  @OneToMany(() => Space, space => space.venue)
  spaces!: Space[];
}