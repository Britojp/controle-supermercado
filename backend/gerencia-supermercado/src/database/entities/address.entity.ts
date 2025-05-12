import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./state.entity";

@Entity('endereco')
export class Address{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    cep: string

    @Column()
    complemento: string

    @ManyToOne(() => State, state => state.address)
    estado: State
    
}