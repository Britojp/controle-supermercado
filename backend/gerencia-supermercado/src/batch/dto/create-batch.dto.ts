import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { Product } from "src/database/entities/product.entity"



class Corridor{
    @IsString()
    name: string
}
class Shelf{
    @IsString()
    name: string
}

class Location_Batch{
    
    @Type(() => Shelf)    
    shelves: Shelf
    
    @Type(() => Corridor)
    corridors: Corridor
    
}
export class createBatchDTO{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsDate()
    @Type(() => Date)
    validate_date: Date
    
    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsString()
    @IsNotEmpty()
    @Type(() => Product)
    productId: string

    @IsOptional()
    @ValidateNested()
    @Type(() => Location_Batch)
    location_batch: Location_Batch
}