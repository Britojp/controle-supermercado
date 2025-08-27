import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class createUserDTO {

    @ApiProperty({
        description: 'Nome completo do usuário',
        example: 'João Silva',
        type: String
    })
    @IsString()
    readonly name: string

    @ApiProperty({
        description: 'Email único do usuário',
        example: 'joao.silva@email.com',
        type: String
    })
    @IsString()
    readonly email : string
    
    @ApiProperty({
        description: 'Senha do usuário (mínimo 6 caracteres)',
        example: 'senhaSegura123',
        type: String,
        minLength: 6
    })
    @IsString()
    readonly password: string
}