import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity('states')
export class State{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    uf: string

    @OneToMany(() => Address, address => address.state)
    address: Address[];
}