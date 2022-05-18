import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

import { v4 as uuid } from "uuid";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  products: Product[];

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
