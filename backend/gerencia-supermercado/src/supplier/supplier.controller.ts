import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { createSupplierDTO } from './dto/create-supplier.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Fornecedores')
@ApiBearerAuth()
@Controller('supplier')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService){}

    @ApiOperation({ summary: 'Listar todos os fornecedores' })
    @ApiResponse({ status: 200, description: 'Lista de fornecedores retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Get()
    findAll(){
        return this.supplierService.findAll()
    }
    
    @ApiOperation({ summary: 'Buscar fornecedor por ID' })
    @ApiParam({ name: 'id', description: 'ID do fornecedor' })
    @ApiResponse({ status: 200, description: 'Fornecedor encontrado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Fornecedor não encontrado' })
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.supplierService.findOne(id);
    }

    @ApiOperation({ summary: 'Criar um novo fornecedor' })
    @ApiResponse({ status: 201, description: 'Fornecedor criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Estado não encontrado' })
    @ApiBody({
        type: createSupplierDTO,
        description: 'Dados para criação do fornecedor',
        examples: {
            exemplo_supplier: {
                summary: 'Exemplo de criação de fornecedor',
                value: {
                    name: 'Fornecedor Exemplo',
                    cnpj: '12.345.678/0001-90',
                    address: {
                        cep: '01234-567',
                        complement: 'Sala 101',
                        id_state: 1
                    },
                    contact: {
                        email: 'contato@fornecedor.com',
                        phone: '1234-5678'
                    }
                }
            }
        }
    })
    @Post()
    create(@Body() createSupplierDTO: createSupplierDTO){
        return this.supplierService.create(createSupplierDTO);
    }

    @ApiOperation({ summary: 'Atualizar fornecedor existente' })
    @ApiParam({ name: 'id', description: 'ID do fornecedor' })
    @ApiResponse({ status: 200, description: 'Fornecedor atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Fornecedor não encontrado' })
    @ApiBody({
        type: createSupplierDTO,
        description: 'Dados para atualização do fornecedor'
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() createSupplierDTO: createSupplierDTO){
        return this.supplierService.update(id, createSupplierDTO);
    }

    @ApiOperation({ summary: 'Excluir fornecedor' })
    @ApiParam({ name: 'id', description: 'ID do fornecedor' })
    @ApiResponse({ status: 204, description: 'Fornecedor excluído com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Fornecedor não encontrado' })
    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.supplierService.remove(id);
    }
}
