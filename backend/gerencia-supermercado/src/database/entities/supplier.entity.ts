import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Contact } from "./contact.entity";
import { Address } from "src/database/entities/address.entity";
import { Transaction } from "src/database/entities/transaction.entity";
@Entity('fornecedor')
export class Supplier{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @Column()
    cnpj: string

    @OneToOne(() => Address, { cascade: true})
    @JoinColumn({ name: 'idendereco' })
    idendereco: Address;
    
    @OneToOne(() => Contact, { cascade: true})
    @JoinColumn({ name: 'idcontato' })
    idcontato: Contact;
    
    @OneToMany(() => Transaction, transaction => transaction.fornecedor)
    transactions: Transaction[]
}