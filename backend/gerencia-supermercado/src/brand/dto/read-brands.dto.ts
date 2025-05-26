import { Brand } from "src/database/entities/brand.entity";

export class readBrandsDTO {
    id: string;
    name: string;
    created_at: number
    
    constructor(entity: Brand) {
        this.id = entity.id;
        this.name = entity.name;
        this.created_at = Date.now(); 
    }  
}