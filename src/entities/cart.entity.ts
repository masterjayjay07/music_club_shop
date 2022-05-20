import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./product.entity";

@Entity("carts")
export default class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  total: number;

  @ManyToMany((type) => Product, {
    eager: true,
  })
  @JoinTable()
  products: Product[];

  @Column()
  userId: string;
}
