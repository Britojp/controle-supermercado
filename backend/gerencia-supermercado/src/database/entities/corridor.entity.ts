import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock_location } from "./stock_location.entity";

@Entity('corredor')
export class Corridor {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    numero: number

    @OneToMany(() => Stock_location, loc => loc.lote)
    localizacoes: Stock_location[];
}