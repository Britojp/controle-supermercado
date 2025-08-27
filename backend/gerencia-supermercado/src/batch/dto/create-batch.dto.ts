import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { Product } from "src/database/entities/product.entity"
import { ApiProperty } from "@nestjs/swagger"

class Corridor{
    @ApiProperty({
        description: 'Nome do corredor',
        example: 'Corredor A',
        type: String
    })
    @IsString()
    name: string
}

class Shelf{
    @ApiProperty({
        description: 'Nome da prateleira',
        example: 'Prateleira 1',
        type: String
    })
    @IsString()
    name: string
}

class Location_Batch{
    @ApiProperty({
        description: 'Prateleira do lote',
        type: () => Shelf
    })
    @Type(() => Shelf)    
    shelves: Shelf
    
    @ApiProperty({
        description: 'Corredor do lote',
        type: () => Corridor
    })
    @Type(() => Corridor)
    corridors: Corridor
}

export class createBatchDTO{
    @ApiProperty({
        description: 'Nome/identificação do lote',
        example: 'LOTE001',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'Data de validade do lote',
        example: '2024-12-31',
        type: Date
    })
    @IsDate()
    @Type(() => Date)
    validate_date: Date
    
    @ApiProperty({
        description: 'Quantidade de produtos no lote',
        example: 100,
        type: Number
    })
    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @ApiProperty({
        description: 'ID do produto do lote',
        example: 'product-123',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @Type(() => Product)
    productId: string

    @ApiProperty({
        description: 'Localização do lote (opcional)',
        type: () => Location_Batch,
        required: false
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => Location_Batch)
    location_batch: Location_Batch
}