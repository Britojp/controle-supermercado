import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock_location } from "./stock_location.entity";

@Entity('prateleira')
export class Shelf{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nome: string
    
    @OneToMany(() => Stock_location, loc => loc.lote)
    localizacoes: Stock_location[];
}