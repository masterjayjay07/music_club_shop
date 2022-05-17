import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("address")
export class Address {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  street: string;

  @Column("int")
  number: number;

  @Column("int")
  cep: number;

  @Column()
  neighborhood: string;

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
