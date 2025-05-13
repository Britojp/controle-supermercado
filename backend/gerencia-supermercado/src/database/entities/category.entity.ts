import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @OneToMany(() => Product, product => product.category)
    products: Product[]
    
}