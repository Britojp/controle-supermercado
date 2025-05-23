import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"

class Brand{
    @IsString()
    @IsNotEmpty()
    name: string
}

class Category{
    @IsString()
    @IsNotEmpty()
    name: string
}


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
    @Type(() => Category)
    category: Category
    
    @ValidateNested()
    @Type(() => Brand)
    brand: Brand
}