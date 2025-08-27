import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import { Brand } from "src/database/entities/brand.entity"
import { Category } from "src/database/entities/category.entity"
import { ApiProperty } from "@nestjs/swagger"

class Measurement{
    
    @ApiProperty({
        description: 'ID da medida',
        example: 'measurement-123',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    id: string

    @ApiProperty({
        description: 'Nome da medida',
        example: 'Gramas',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'Iniciais da medida',
        example: 'g',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    initials: string
}

class Nutrition{
    @ApiProperty({
        description: 'Porção em gramas',
        example: 100,
        type: Number
    })
    @IsNotEmpty()
    @IsNumber()
    portion : number

    @ApiProperty({
        description: 'Medida da porção',
        type: () => Measurement
    })
    @IsNotEmpty()
    @Type(() => Measurement)
    measurement : Measurement

    @ApiProperty({
        description: 'Quantidade de proteína por 100g',
        example: 7.5,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    protein_quantity: number

    @ApiProperty({
        description: 'Quantidade de gordura por 100g',
        example: 1.2,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    fatness_quantity: number

    @ApiProperty({
        description: 'Quantidade de carboidrato por 100g',
        example: 77.0,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    carbohydrate_quantity: number
}


export class createProductDTO{
    @ApiProperty({
        description: 'Nome do produto',
        example: 'Arroz Integral',
        type: String
    })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({
        description: 'Informações nutricionais do produto',
        type: () => Nutrition
    })
    @ValidateNested()
    @Type(() => Nutrition)
    nutrition : Nutrition 
    
    @ApiProperty({
        description: 'Categoria do produto',
        type: () => Category
    })
    @ValidateNested()
    @Type(() => Category)
    category: Category
    
    @ApiProperty({
        description: 'Marca do produto',
        type: () => Brand
    })
    @ValidateNested()
    @Type(() => Brand)
    brand: Brand
}