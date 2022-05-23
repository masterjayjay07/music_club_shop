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
import { Address } from "./address.entity";

import Buys from "./buys.entity";
  
  @Entity()
  export default class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    
    @Column()
    userId: string;
    
    @Column()
    status: string;
    
    @Column()
    typeOfPayment:string;
    
    @ManyToOne((type) => User, (user) => user.id, { eager: true })
    @JoinTable()
    user: User;

    @OneToOne(type=>Address,{eager:true})
    @JoinColumn()
    address:Address;

    @OneToOne(type=>Buys,{eager:true})
    @JoinColumn()
    buys:Buys;

  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }