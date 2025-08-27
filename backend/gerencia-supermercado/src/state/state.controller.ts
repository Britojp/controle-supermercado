import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Estados')
@ApiBearerAuth()
@Controller('states')
export class StateController {
    constructor(private readonly stateService: StateService){}
    @ApiOperation({ summary: 'Listar todos os estados' })
    @ApiResponse({ status: 200, description: 'Lista de estados retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Estados não encontrados' })
    @Get()
    findAll(){
        return this.stateService.findAll();
    }
}
