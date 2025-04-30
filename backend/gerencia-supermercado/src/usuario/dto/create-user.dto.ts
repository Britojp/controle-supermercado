import { IsString } from "class-validator"

export class createUserDTO {

    @IsString()
    readonly nome: string

    @IsString()
    readonly email : string
    
    @IsString()
    readonly password: string
}