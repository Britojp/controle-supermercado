import { IsNotEmpty, IsString } from "class-validator";

export class createCategoriesDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}