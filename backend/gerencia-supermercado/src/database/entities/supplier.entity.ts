import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Contact } from "./contact.entity";
import { Address } from "src/database/entities/address.entity";
import { Transaction } from "src/database/entities/transaction.entity";
@Entity('suppliers')
export class Supplier{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    cnpj: string

    @OneToOne(() => Address)
    @JoinColumn({ name: 'id_address' })
    id_address: Address;
    
    @OneToOne(() => Contact)
    @JoinColumn({ name: 'id_contacts' })
    id_contacts: Contact;
    
    @OneToMany(() => Transaction, transaction => transaction.supplier)
    transactions: Transaction[]
}