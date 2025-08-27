import { Type } from "class-transformer"
import { IsNotEmpty, IsString, ValidateNested } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

class enderecoDTO{
    @ApiProperty({
        description: 'CEP do endereço',
        example: '01234-567',
        type: String
    })
    @IsNotEmpty()
    @IsString()
    cep: string

    @ApiProperty({
        description: 'Complemento do endereço',
        example: 'Sala 101, 2º andar',
        type: String
    })
    @IsString()
    complement: string

    @ApiProperty({
        description: 'ID do estado',
        example: '1',
        type: String
    })
    @IsNotEmpty()
    @IsString()
    id_state: string;
}

class contatoDTO{
    @ApiProperty({
        description: 'Número de telefone',
        example: '(11) 1234-5678',
        type: String
    })
    @IsString()
    tel_number: string
}

export class createSupplierDTO {
    @ApiProperty({
        description: 'Nome do fornecedor',
        example: 'Fornecedor Exemplo Ltda',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    name: string
    
    @ApiProperty({
        description: 'CNPJ do fornecedor',
        example: '12.345.678/0001-90',
        type: String
    })
    @IsString()
    @IsNotEmpty()
    cnpj: string
    
    @ApiProperty({
        description: 'Endereço do fornecedor',
        type: () => enderecoDTO
    })
    @Type(() => enderecoDTO)
    @ValidateNested()
    address: enderecoDTO
    
    @ApiProperty({
        description: 'Informações de contato',
        type: () => contatoDTO
    })
    @Type(() => contatoDTO)
    @ValidateNested()
    contact: contatoDTO
}