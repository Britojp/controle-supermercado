import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Batch } from "./batch.entity"
import { Corridor } from "./corridor.entity"
import { Shelf } from "./shelf.entity"

@Entity('stock_locations')
export class Stock_location{
    @PrimaryGeneratedColumn()
    id: string
    
    @ManyToOne(() => Batch)
    @JoinColumn({ name: "id_batches" })
    batch: Batch;
    
    @ManyToOne(() => Shelf)
    @JoinColumn({ name: "id_shelves" })
    shelf: Shelf;
    
    @ManyToOne(() => Corridor)
    @JoinColumn({ name: "id_corridors" })
    corridor: Corridor;
    
}