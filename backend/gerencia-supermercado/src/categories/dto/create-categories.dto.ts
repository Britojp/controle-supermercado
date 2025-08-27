import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class createCategoriesDTO {
    @ApiProperty({
        description: 'Nome da categoria',
        example: 'Grãos',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string
}