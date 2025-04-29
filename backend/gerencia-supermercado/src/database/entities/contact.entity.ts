import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";

@Entity('contato')
export class Contact{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: string
    
    @OneToOne(() => Supplier)
    fornecedor: Supplier
}