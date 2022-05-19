import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => User, (user) => user.id, { eager: true })
  @JoinTable()
  user: User;

  @Column()
  userId: string;

  @Column()
  status: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
