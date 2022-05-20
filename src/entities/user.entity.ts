import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Address } from "./address.entity";
import Cart from "./cart.entity";
import Order from "./order.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

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

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne((type=>Cart),{eager:true})
  @JoinColumn()
  cart:Cart;

  
  //  @OneToMany((type) => Address, (address) => address.id, { eager: true })
  //  @JoinTable()
  //  address: Address[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
