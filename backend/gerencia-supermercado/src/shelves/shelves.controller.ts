import { Controller, Get } from '@nestjs/common';
import { ShelvesService } from './shelves.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Prateleiras')
@ApiBearerAuth()
@Controller('shelves')
export class ShelvesController {
    constructor(private readonly shelvesService: ShelvesService) {}

    @ApiOperation({ summary: 'Listar todas as prateleiras' })
    @ApiResponse({ status: 200, description: 'Lista de prateleiras retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Prateleiras não encontradas' })
    @Get()
    findAll() {
        return this.shelvesService.findAll();
    }
}
