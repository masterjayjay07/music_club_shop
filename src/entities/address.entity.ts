import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

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
  city: string;

  @Column()
  country: string;

  @Column()
  complement: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
