import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Category } from "./category.entity";

@Entity('marca')
export class Brand{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @OneToMany(() => Product, product => product.marca)
    produtos: Product[]
    
}