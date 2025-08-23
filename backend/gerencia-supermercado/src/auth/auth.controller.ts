import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LoginRequestBody } from './models/LoginRequestBody';

@ApiTags('Autenticação')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @ApiOperation({ 
        summary: 'Fazer login no sistema',
        description: 'Autentica o usuário e retorna um token JWT para acesso às rotas protegidas'
    })
    @ApiBody({ 
        type: LoginRequestBody,
        description: 'Credenciais de login'
    })
    @ApiResponse({ 
        status: 200, 
        description: 'Login realizado com sucesso',
        schema: {
            type: 'object',
            properties: {
                access_token: {
                    type: 'string',
                    description: 'Token JWT para autenticação'
                },
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        email: { type: 'string' },
                        name: { type: 'string' }
                    }
                }
            }
        }
    })
    @ApiResponse({ 
        status: 401, 
        description: 'Credenciais inválidas'
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Dados de entrada inválidos'
    })
    login(@Request() req : AuthRequest){
        return this.authService.login(req.user);
    }
}
