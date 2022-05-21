import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

@Entity("carts")
export default class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  subtotal: number;

  @ManyToMany((type) => Product, {
    eager: true,
  })
  @JoinTable()
  products: Product[];

  @Column({ nullable: true })
  userId: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
