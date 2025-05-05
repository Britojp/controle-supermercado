import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Measurement } from "./measurement.entity";
import { Product } from "./product.entity";

@Entity('nutricao')
export class Nutrition{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    porcao: number

    @Column('decimal')
    quantidade_proteina: number

    @Column('decimal')
    quantidade_gordura: number

    @Column('decimal')
    quantidade_carboidrato: number

    @ManyToOne(() => Measurement, {cascade: true, eager:true, nullable: false})
    @JoinColumn({ name: 'idunidade_de_medida' })
    unidademedida: Measurement
}