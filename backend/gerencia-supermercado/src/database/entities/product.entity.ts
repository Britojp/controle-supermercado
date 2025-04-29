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
    name: string

    @OneToOne( () => Nutrition)
    @JoinColumn({ name: 'nutricao_id' })
    nutricao: Nutrition

    @OneToMany( () => Category, category => category.produtos)
    @JoinColumn({ name: 'categoria_id' })
    categoria: Category

    @ManyToOne( () => Brand, brand => brand.produtos)
    @JoinColumn({ name: 'marca_id' })
    marca: Brand

    @OneToOne( () => Transaction, transaction => transaction.produto)
    transacao: Transaction

    @OneToOne( () => Batch, batch => batch.produto)
    @JoinColumn({ name: 'lote_id' })
    produto: Product

}