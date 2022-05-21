import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("address")
export class Address {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  street: string;

  @Column("int")
  number: number;

  @Column()
  cep: string;

  @Column()
  neighborhood: string;

  @Column()
  country: string;

  @Column()
  complement: string;

  @ManyToOne((type) => User, (user) => user.address)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
