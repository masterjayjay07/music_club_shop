import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("address")
export class Address {
  @PrimaryColumn("uuid")
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

  @ManyToOne(() => User, (user) => user.id, {
    eager: true,
  })
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
