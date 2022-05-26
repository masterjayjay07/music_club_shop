import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";
import Cart from "./cart.entity";

@Entity("cartProduct")
export default class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => Cart)
  cart: Cart;

  @ManyToOne((type) => Product, { eager: true })
  product: Product;

  @Column()
  cartId: string;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
