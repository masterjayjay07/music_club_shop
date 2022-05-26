import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import BuyProduct from "./buy-product";

@Entity("buys")
export default class Buys {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  total?: number;

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
