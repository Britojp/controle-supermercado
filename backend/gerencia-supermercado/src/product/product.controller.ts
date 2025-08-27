import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDTO } from './dto/create-product.dto';
import { updateProductDTO } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Produtos')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @ApiOperation({ summary: 'Listar todos os produtos' })
    @ApiResponse({ status: 200, description: 'Lista de produtos retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Produtos não encontrados' })
    @Get()
    findAll(){
        return this.productService.findAll();
    }

    @ApiOperation({ summary: 'Buscar produto por ID' })
    @ApiParam({ name: 'id', description: 'ID do produto' })
    @ApiResponse({ status: 200, description: 'Produto encontrado com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Produto não encontrado' })
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.productService.findOne(id);
    }

    @ApiOperation({ summary: 'Criar novo produto' })
    @ApiResponse({ status: 201, description: 'Produto criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiBody({
        type: createProductDTO,
        description: 'Dados para criação do produto',
        examples: {
            exemplo_produto: {
                summary: 'Exemplo de criação de produto',
                value: {
                    name: 'Arroz Integral',
                    nutrition: {
                        portion: 100,
                        protein_quantity: 7.5,
                        fatness_quantity: 1.2,
                        carbohydrate_quantity: 77.0,
                        measurement: {
                            id: 'measurement-123',
                            name: 'Gramas',
                            initials: 'g'
                        }
                    },
                    category: {
                        name: 'Grãos'
                    },
                    brand: {
                        name: 'Marca Exemplo'
                    }
                }
            }
        }
    })
    @Post() 
    create(@Body() createProductDTO : createProductDTO){
        return this.productService.create(createProductDTO);
    }

    @ApiOperation({ summary: 'Excluir produto' })
    @ApiParam({ name: 'id', description: 'ID do produto' })
    @ApiResponse({ status: 204, description: 'Produto excluído com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Produto não encontrado' })
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.productService.remove(id);
    }

    @ApiOperation({ summary: 'Atualizar produto existente' })
    @ApiParam({ name: 'id', description: 'ID do produto' })
    @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Produto não encontrado' })
    @ApiBody({
        type: updateProductDTO,
        description: 'Dados para atualização do produto',
        examples: {
            exemplo_atualizacao: {
                summary: 'Exemplo de atualização de produto',
                value: {
                    name: 'Arroz Integral Orgânico',
                    nutrition: {
                        portion: 100,
                        protein_quantity: 8.0,
                        fatness_quantity: 1.5,
                        carbohydrate_quantity: 75.0
                    }
                }
            }
        }
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDTO : updateProductDTO){
        return this.productService.update(id, updateProductDTO);
    }
}
