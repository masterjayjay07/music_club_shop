import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import {v4 as uuid} from 'uuid'
  import { Product } from "./product.entity";
import { User } from "./user.entity";
  
  @Entity("buys")
  export default class Buys {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("float")
    total?:number;

    // @ManyToOne(type=>User,user=>user.buys)
    // user:User
    
    @ManyToMany(type=>Product,{eager:true})
    @JoinTable()
    products?:Product[]
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }