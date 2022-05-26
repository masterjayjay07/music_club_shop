import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

import Buys from "./buys.entity";

@Entity("buyProduct")
export default class BuyProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => Buys)
  buy: Buys;

  @ManyToOne((type) => Product, { eager: true })
  product: Product;

  @Column()
  buyId: string;

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
