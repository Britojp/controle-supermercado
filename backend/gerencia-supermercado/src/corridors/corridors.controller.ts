import { Controller, Get } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Corredores')
@ApiBearerAuth()
@Controller('corridors')
export class CorridorsController {
    constructor(private readonly corridorsService: CorridorsService) {}
    
    @ApiOperation({ summary: 'Listar todos os corredores' })
    @ApiResponse({ status: 200, description: 'Lista de corredores retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Get()
    findAll() {
        return this.corridorsService.findAll();
    }
}
