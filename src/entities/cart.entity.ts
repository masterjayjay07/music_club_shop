import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import CartProduct from "./cart-product.entity";
import { Product } from "./product.entity";

@Entity("carts")
export default class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  subtotal: number;

  // @ManyToMany((type) => Product, {
  //   eager: true,
  // })
  // @JoinTable()
  // products: Product[];

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart, {
    eager: true,
  })
  products: CartProduct[];

  @Column({ nullable: true })
  userId: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
