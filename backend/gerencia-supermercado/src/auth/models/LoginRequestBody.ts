import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestBody {
    @ApiProperty({
        description: 'Email do usuário',
        example: 'usuario@exemplo.com',
        type: String
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'senha123',
        type: String,
        minLength: 6
    })
    @IsString()
    password: string;
}