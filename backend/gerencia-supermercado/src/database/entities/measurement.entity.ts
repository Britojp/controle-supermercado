import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Nutrition } from "./nutrition.entity"

@Entity('unidade_medida')
export class Measurement{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string

    @Column()
    sigla: string

    @OneToMany(() => Nutrition, nutrition => nutrition.unidademedida)
    unidademedida: Nutrition[]
}