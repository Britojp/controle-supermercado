import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";

@Entity('contato')
export class Contact{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    numero: string
    
    @OneToOne(() => Supplier)
    fornecedor: Supplier
}