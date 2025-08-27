import { Controller, Get } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Medidas')
@ApiBearerAuth()
@Controller('measurement')
export class MeasurementController {
    constructor(
        private readonly measurementService: MeasurementService
    ) {}
    
    @ApiOperation({ summary: 'Listar todas as medidas' })
    @ApiResponse({ status: 200, description: 'Lista de medidas retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Get()
    findAll() {
        return this.measurementService.findall();
    }
}
