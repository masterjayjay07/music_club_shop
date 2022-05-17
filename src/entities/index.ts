import { Entity,Column,PrimaryColumn } from "typeorm";

@Entity()
export default class User{
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

} 
