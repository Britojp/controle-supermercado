import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categorias')
@ApiBearerAuth()
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}
        
    @ApiOperation({ summary: 'Listar todas as categorias' })
    @ApiResponse({ status: 200, description: 'Lista de categorias retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Categorias não encontradas' })
    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }
}
