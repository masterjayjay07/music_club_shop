import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";

import { v4 as uuid } from "uuid";
import Order from "./order.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 256, nullable: false })
  name: string;

  @Column({ length: 256, unique: true })
  email: string;

  @Column({ unique: true, nullable: false })
  user_name: string;

  @Column()
  birth_date: string;

  @Column({ default: false })
  is_adm: boolean;

  @Column()
  password: string;

  @OneToOne((type) => Order, {
    eager: true,
  })
  @JoinColumn()
  cart: Order;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @OneToMany((type) => Order, (order) => order.id, { eager: true })
  // @JoinTable()
  // order: Order[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
