import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Supplier } from "./supplier.entity";
import { Product } from "./product.entity";
import { User } from "src/database/entities/user.entity";
import { Tipo_Transacao } from "src/interfaces/interfaces.types";

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: 'enum', enum: Tipo_Transacao })
    transaction_type: Tipo_Transacao;

    @Column()
    transaction_date: Date

    @Column('decimal')
    price: number
    
    @Column()
    quantity: number

    @ManyToOne(() => User, user => user.transactions)
    @JoinColumn({ name: 'id_users' })
    user: User

    @ManyToOne(() => Supplier, supplier => supplier.transactions)
    @JoinColumn({ name: 'id_suppliers' })
    supplier: Supplier

    @OneToOne(() => Product, product => product.transaction)
    @JoinColumn({ name: 'id_products' })
    product: Product;
    

}