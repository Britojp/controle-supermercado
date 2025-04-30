import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, Validate, ValidateNested } from "class-validator"
import { createBatchDTO } from "src/batch/dto/create-batch.dto"

class Brand{
    @IsString()
    @IsNotEmpty()
    nome: string
}

class Category{
    @IsString()
    @IsNotEmpty()
    nome: string
}


class Measurement{
    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    sigla: string
}

class Nutrition{
    @IsNotEmpty()
    @IsNumber()
    porcao : number

    @IsNotEmpty()
    @Type(() => Measurement)
    unidade_medida : Measurement

    @IsNumber()
    @IsNotEmpty()
    quantidade_proteina: number

    @IsNumber()
    @IsNotEmpty()
    quantidade_gordura: number

    @IsNumber()
    @IsNotEmpty()
    quantidade_carboidrato: number
}


export class createProductDTO{
    @IsNotEmpty()
    @IsString()
    nome: string

    @ValidateNested()
    @Type(() => Nutrition)
    nutricao : Nutrition
    
    @ValidateNested()
    @Type(() => Category)
    categoria: Category
    
    @ValidateNested()
    @Type(() => Brand)
    marca: Brand

    @ValidateNested()
    @Type(() => createBatchDTO)
    lote: createBatchDTO
    
}