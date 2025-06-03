import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Transaction } from "./transaction.entity";
import { Stock_location } from "./stock_location.entity";

@Entity('batches')
export class Batch {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    number: string

    @Column()
    validate_date: Date

    @Column()
    quantity: number

    @OneToOne(() => Transaction)
    transaction: Transaction
    
    @OneToOne(() => Product)
    product: Product

    @OneToMany(() => Stock_location, loc => loc.batch)
    locations: Stock_location[];

}