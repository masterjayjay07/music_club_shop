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
