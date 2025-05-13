import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('brands')
export class Brand{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @OneToMany(() => Product, product => product.brand)
    products: Product[]
    
}