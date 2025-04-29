import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Transaction } from "./transaction.entity";
import { Stock_location } from "./stock_location.entity";

@Entity('lote')
export class Batch {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    numero: number

    @Column()
    data_validade: Date

    @Column()
    quantidade: number

    @OneToOne(() => Transaction)
    transacao: Transaction
    
    @OneToOne(() => Product)
    produto: Product

    @OneToMany(() => Stock_location, loc => loc.lote)
    localizacoes: Stock_location[];

}