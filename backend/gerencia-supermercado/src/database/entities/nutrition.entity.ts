import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Measurement } from "./measurement.entity";
import { Product } from "./product.entity";

@Entity('nutricao')
export class Nutrition{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    porcao: number

    @Column()
    quantidade_proteina: number

    @Column()
    quantidade_gordura: number

    @Column()
    quantidade_carboidrato: number

    @OneToOne(() => Measurement)
    @JoinColumn({ name: 'unidade_de_medida_id' })
    unidademedida: Measurement

    @OneToOne( () => Product)
    produto: Product

}