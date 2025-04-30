import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { Product } from "src/database/entities/product.entity"



class Corridor{
    @IsString()
    nome: string
}
class Shelf{
    @IsString()
    nome: string
}

class Location_Batch{
    
    @Type(() => Shelf)    
    prateleira: Shelf
    
    @Type(() => Corridor)
    corredor: Corridor
    
}
export class createBatchDTO{
    @IsString()
    @IsNotEmpty()
    numero: string

    @IsDate()
    @Type(() => Date)
    data_validade: Date
    
    @IsNumber()
    @IsNotEmpty()
    quantidade: number

    @IsOptional()
    @ValidateNested()
    @Type(() => Location_Batch)
    localizacao_estoque: Location_Batch
}