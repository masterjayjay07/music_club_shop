import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import Cart from "./cart.entity";

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

  @Exclude()
  @Column()
  password: string;

  @OneToOne((type) => Cart, {
    eager: true,
  })
  @JoinColumn()
  cart: Cart;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
