import { IsNotEmpty, IsString } from "class-validator";

class Brand{
    @IsString()
    @IsNotEmpty()
    name: string
}

export class createBrandDTO{
    @IsNotEmpty()
    @IsString()
    name: string

}