import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Nutrition } from "./nutrition.entity"

@Entity('unidade_medida')
export class Measurement{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    sigla: string

    @OneToOne(() => Nutrition)
    nutricao: Nutrition

}