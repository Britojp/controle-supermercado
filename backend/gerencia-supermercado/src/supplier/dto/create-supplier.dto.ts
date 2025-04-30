import { Type } from "class-transformer"
import { IsNotEmpty, IsString, ValidateNested } from "class-validator"

class estadoDTO{
    @IsNotEmpty()
    @IsString()
    nome: string

    @IsNotEmpty()
    @IsString()
    uf: string
}

class enderecoDTO{
    @IsNotEmpty()
    @IsString()
    cep: string

    @IsString()
    complemento: string

    @Type(() => estadoDTO)
    @ValidateNested()
    estado: estadoDTO
}

class contatoDTO{
    @IsString()
    numero: string
}

export class createSupplierDTO {
    @IsString()
    @IsNotEmpty()
    nome: string
    
    @IsString()
    @IsNotEmpty()
    cnpj: string
    
    @Type(() => enderecoDTO)
    @ValidateNested()
    endereco: enderecoDTO
    
    @Type(() => contatoDTO)
    @ValidateNested()
    contato: contatoDTO
}