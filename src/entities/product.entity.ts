import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, unique: true })
  name: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  img_url: string;

  @Column({ length: 120 })
  type: string;

  @Column()
  quantity_stock: number;

  @Column({ nullable: true })
  rating: number;

  @Column()
  label: string;

  @Column()
  description:string;

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
