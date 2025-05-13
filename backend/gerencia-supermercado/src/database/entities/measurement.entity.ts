import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Nutrition } from "./nutrition.entity"

@Entity('measurements')
export class Measurement{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    initials: string

    @OneToMany(() => Nutrition, nutrition => nutrition.measurement)
    measurement: Nutrition[]
}