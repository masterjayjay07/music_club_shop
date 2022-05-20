import {Column,Entity,JoinTable,ManyToMany,PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

@Entity()
export default class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  subtotal:number;
  
  @ManyToMany(type=>Product,{eager:true})
  @JoinTable()
  product:Product[]
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}