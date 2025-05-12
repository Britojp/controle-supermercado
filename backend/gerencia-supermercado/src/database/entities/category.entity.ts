import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('categoria')
export class Category {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @OneToMany(() => Product, product => product.categoria)
    produtos: Product[]
    
}