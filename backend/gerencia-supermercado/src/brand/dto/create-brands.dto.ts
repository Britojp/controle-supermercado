import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

class Brand{
    @ApiProperty({
        description: 'Nome da marca',
        example: 'Marca Exemplo',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string
}

export class createBrandDTO{
    @ApiProperty({
        description: 'Nome da marca',
        example: 'Marca Exemplo',
        type: String
    })
    @IsNotEmpty()
    @IsString()
    name: string
}