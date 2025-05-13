import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { State } from "./state.entity";

@Entity('address')
export class Address{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    cep: string

    @Column()
    complement: string

    @ManyToOne(() => State, state => state.address)
    @JoinColumn({ name: 'id_states' }) 
    state: State
    
}