import { Brand } from "src/database/entities/brand.entity";
import { ApiProperty } from "@nestjs/swagger";

export class readBrandsDTO {
    @ApiProperty({
        description: 'ID da marca',
        example: '1',
        type: String
    })
    id: string;
    
    @ApiProperty({
        description: 'Nome da marca',
        example: 'Marca Exemplo',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Data de criação da marca (timestamp)',
        example: 1640995200000,
        type: Number
    })
    created_at: number
    
    constructor(entity: Brand) {
        this.id = entity.id;
        this.name = entity.name;
        this.created_at = Date.now(); 
    }  
}