import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Batch } from "./batch.entity"
import { Corridor } from "./corridor.entity"
import { Shelf } from "./shelf.entity"

@Entity('localizacao_estoque')
export class Stock_location{
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Batch)
    @JoinColumn({ name: "lote_id" })
    lote: Batch;
    
    @ManyToOne(() => Shelf)
    @JoinColumn({ name: "prateleira_id" })
    prateleira: Shelf;
    
    @ManyToOne(() => Corridor)
    @JoinColumn({ name: "corredor_id" })
    corredor: Corridor;
    
}