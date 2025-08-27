import { Category } from "src/database/entities/category.entity";
import { ApiProperty } from "@nestjs/swagger";

export class ReadCategoriesDTO {
    @ApiProperty({
        description: 'ID da categoria',
        example: '1',
        type: String
    })
    id: string;
    
    @ApiProperty({
        description: 'Nome da categoria',
        example: 'Grãos',
        type: String
    })
    name: string;

    constructor(entity: Category) {
        this.id = entity.id;
        this.name = entity.name;
    }
}