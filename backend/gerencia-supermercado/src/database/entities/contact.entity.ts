import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./supplier.entity";

@Entity('contacts')
export class Contact{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    tel_number: string
    
    @OneToOne(() => Supplier)
    supplier: Supplier
}