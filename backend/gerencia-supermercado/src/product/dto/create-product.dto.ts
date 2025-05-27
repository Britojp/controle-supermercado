import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import { createCategoriesDTO } from "src/categories/dto/create-categories.dto"
import { Brand } from "src/database/entities/brand.entity"

class Measurement{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    initials: string
}

class Nutrition{
    @IsNotEmpty()
    @IsNumber()
    portion : number

    @IsNotEmpty()
    @Type(() => Measurement)
    measurement : Measurement

    @IsNumber()
    @IsNotEmpty()
    protein_quantity: number

    @IsNumber()
    @IsNotEmpty()
    fatness_quantity: number

    @IsNumber()
    @IsNotEmpty()
    carbohydrate_quantity: number
}


export class createProductDTO{
    @IsNotEmpty()
    @IsString()
    name: string

    @ValidateNested()
    @Type(() => Nutrition)
    nutrition : Nutrition 
    
    @ValidateNested()
    @Type(() => createCategoriesDTO)
    category: createCategoriesDTO
    
    @ValidateNested()
    @Type(() => Brand)
    brand: Brand
}