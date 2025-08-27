import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { createBrandDTO } from './dto/create-brands.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Marcas')
@ApiBearerAuth()
@Controller('brand')
export class BrandController {
    constructor (private readonly brandService: BrandService){}

    @ApiOperation({ summary: 'Listar todas as marcas' })
    @ApiResponse({ status: 200, description: 'Lista de marcas retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Marcas não encontradas' })
    @Get()
    findAll(){
        return this.brandService.findAll();
    }

    @ApiOperation({ summary: 'Criar nova marca' })
    @ApiResponse({ status: 201, description: 'Marca criada com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou erro na criação' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiBody({
        type: createBrandDTO,
        description: 'Dados para criação da marca',
        examples: {
            exemplo_marca: {
                summary: 'Exemplo de criação de marca',
                value: {
                    name: 'Marca Exemplo'
                }
            }
        }
    })
    @Post()
    create(@Body() createBrandDTO: createBrandDTO){
        return this.brandService.create(createBrandDTO)
    }
}
