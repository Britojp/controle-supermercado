import { Type } from "class-transformer"
import { IsNotEmpty, IsString, ValidateNested } from "class-validator"

class estadoDTO{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    uf: string
}

class enderecoDTO{
    @IsNotEmpty()
    @IsString()
    cep: string

    @IsString()
    complement: string

    @Type(() => estadoDTO)
    @ValidateNested()
    state: estadoDTO
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