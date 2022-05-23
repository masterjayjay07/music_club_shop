import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import {v4 as uuid} from 'uuid'
import BuyProduct from "./buy-product";
import CartProduct from "./cart-product.entity";
  import { Product } from "./product.entity";
import { User } from "./user.entity";
  
  @Entity("buys")
  export default class Buys {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column("float")
    total?:number;

    
    // @ManyToMany(type=>Product,{eager:true})
    // @JoinTable()
    // products?:Product[]

    @OneToMany((type) => BuyProduct, (buyProduct) => buyProduct.buy, {
      eager: true,
    })
    products: BuyProduct[];


    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }