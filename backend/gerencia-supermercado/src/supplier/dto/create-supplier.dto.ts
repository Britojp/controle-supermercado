import { Type } from "class-transformer"
import { IsNotEmpty, IsString, ValidateNested } from "class-validator"

class enderecoDTO{
    @IsNotEmpty()
    @IsString()
    cep: string

    @IsString()
    complement: string

    @IsNotEmpty()
    @IsString()
    id_state: string;
}

class contatoDTO{
    @IsString()
    tel_number: string
}

export class createSupplierDTO {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    cnpj: string
    
    @Type(() => enderecoDTO)
    @ValidateNested()
    address: enderecoDTO
    
    @Type(() => contatoDTO)
    @ValidateNested()
    contact: contatoDTO
}