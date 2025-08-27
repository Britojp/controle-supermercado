import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { UsuarioService } from './user.service';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
@ApiTags('Usuários')
@ApiBearerAuth()
@Controller('user')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @ApiOperation({ summary: 'Listar todos os usuários' })
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 403, description: 'Acesso negado - Permissões insuficientes' })
    @Get()
    findAll(){
        return this.usuarioService.findAll();
    }

    @ApiOperation({ summary: 'Buscar usuário por email' })
    @ApiParam({ name: 'email', description: 'Email do usuário' })
    @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    @Get(':email')
    findOne(@Param('email') email: string){
        return this.usuarioService.findByEmail(email);
    }

    @IsPublic()
    @ApiOperation({ summary: 'Criar novo usuário' })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @Post()
    @ApiBody({
        type: createUserDTO,
        description: 'Dados para criação do usuário',
        examples: {
            exemplo: {
                summary: 'Exemplo de criação de usuário',
                value: {
                    nome: 'João Silva',
                    email: 'joao@email.com',
                    senha: 'senhaSegura123',
                }
            }
        }
    })
    create(@Body() createUserDTO : createUserDTO){
        return this.usuarioService.create(createUserDTO);
    }

    @ApiOperation({ summary: 'Atualizar usuário existente' })
    @ApiParam({ name: 'id', description: 'ID do usuário' })
    @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    @ApiBody({
        type: updateUserDTO,
        description: 'Dados para atualização do usuário',
        examples: {
            exemplo_atualizacao: {
                summary: 'Exemplo de atualização de usuário',
                value: {
                    nome: 'João Silva Atualizado',
                    email: 'joao.novo@email.com'
                }
            }
        }
    })
    @Patch(':id')
    update(@Param('id') id : string, @Body() updateUserDTO: updateUserDTO){
        return this.usuarioService.update(id, updateUserDTO);
    }

    @ApiOperation({ summary: 'Excluir usuário' })
    @ApiParam({ name: 'id', description: 'ID do usuário' })
    @ApiResponse({ status: 204, description: 'Usuário excluído com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.usuarioService.remove(id);
    }
}
