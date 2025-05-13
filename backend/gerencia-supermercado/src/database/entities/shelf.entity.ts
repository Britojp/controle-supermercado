import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stock_location } from "./stock_location.entity";

@Entity('shelves')
export class Shelf{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string
    
    @OneToMany(() => Stock_location, loc => loc.batch)
    locations: Stock_location[];
}