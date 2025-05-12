import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address.entity";

@Entity('estado')
export class State{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @Column()
    uf: string

    @OneToMany(() => Address, address => address.estado)
    address: Address[];
}