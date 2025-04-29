import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Category } from "./category.entity";

@Entity('marca')
export class Brand{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany( () => Category, category => category.produtos)
    produtos: Product[]
}