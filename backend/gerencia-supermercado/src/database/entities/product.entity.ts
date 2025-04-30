import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Nutrition } from "./nutrition.entity";
import { Category } from "./category.entity";
import { Brand } from "./brand.entity";
import { Transaction } from "./transaction.entity";
import { Batch } from "./batch.entity";



@Entity('produto')
export class Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToOne( () => Nutrition)
    @JoinColumn({ name: 'idnutricao' })
    nutricao: Nutrition

    @ManyToOne( () => Category, category => category.produtos)
    @JoinColumn({ name: 'idcategoria' })
    categoria: Category

    @ManyToOne( () => Brand, brand => brand.produtos)
    @JoinColumn({ name: 'idmarca' })
    marca: Brand

    @OneToOne( () => Transaction, transaction => transaction.produto)
    transacao: Transaction

}