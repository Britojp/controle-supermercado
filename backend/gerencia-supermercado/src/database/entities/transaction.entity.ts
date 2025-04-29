import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { Supplier } from "./supplier.entity";
import { Product } from "./product.entity";
import { User } from "src/database/entities/user.entity";

@Entity('transacao')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tipo_transacao: string

    @Column()
    data_transacao: Date

    @Column('decimal')
    preco: number
    
    @ManyToOne(() => User, user => user.transactions)
    @JoinColumn({ name: 'usuario_id' })
    usuario: User

    @ManyToOne(() => Supplier, supplier => supplier.transactions)
    @JoinColumn({ name: 'fornecedor_id' })
    fornecedor: Supplier

    @OneToOne(() => Product)
    @JoinColumn({ name: 'produto_id' })
    produto: Product;

}