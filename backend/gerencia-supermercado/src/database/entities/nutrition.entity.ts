import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Measurement } from "./measurement.entity";
import { Product } from "./product.entity";

@Entity('nutritions')
export class Nutrition{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    portion: number

    @Column('decimal')
    protein_quantity: number

    @Column('decimal')
    fatness_quantity: number

    @Column('decimal')
    carbohydrate_quantity: number

    @ManyToOne(() => Measurement, {eager:true, nullable: false, cascade: true })
    @JoinColumn({ name: 'id_measurements' })
    measurement: Measurement
}