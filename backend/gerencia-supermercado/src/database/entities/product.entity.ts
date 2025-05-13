import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Nutrition } from "./nutrition.entity";
import { Category } from "./category.entity";
import { Brand } from "./brand.entity";
import { Transaction } from "./transaction.entity";
import { Batch } from "./batch.entity";



@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @OneToOne(() => Nutrition, { cascade: true })
    @JoinColumn({ name: 'id_nutritions' })
    nutrition: Nutrition


    @ManyToOne( () => Category, category => category.products)
    @JoinColumn({ name: 'id_categories' })
    category: Category

    @ManyToOne( () => Brand, brand => brand.products)
    @JoinColumn({ name: 'id_brands' })
    brand: Brand

    @OneToOne(() => Transaction, transaction => transaction.product)
    transaction: Transaction
    

}