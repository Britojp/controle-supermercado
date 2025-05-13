import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock_location } from "./stock_location.entity";

@Entity('corridors')
export class Corridor {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    number: number

    @OneToMany(() => Stock_location, loc => loc.batch)
    locations: Stock_location[];
}