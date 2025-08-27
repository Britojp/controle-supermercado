import { Body, Controller, Get, Post } from '@nestjs/common';
import { BatchService } from './batch.service';
import { createBatchDTO } from './dto/create-batch.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Lotes')
@ApiBearerAuth()
@Controller('batch')
export class BatchController {
    constructor(private readonly batchService: BatchService) {}

    @ApiOperation({ summary: 'Listar todos os lotes' })
    @ApiResponse({ status: 200, description: 'Lista de lotes retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiResponse({ status: 404, description: 'Lotes não encontrados' })
    @Get()
    findAll() {
        return this.batchService.findAll();
    }

    @ApiOperation({ summary: 'Criar novo lote' })
    @ApiResponse({ status: 201, description: 'Lote criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou produto não encontrado' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiBody({
        type: createBatchDTO,
        description: 'Dados para criação do lote',
        examples: {
            exemplo_lote: {
                summary: 'Exemplo de criação de lote',
                value: {
                    productId: 'product-123',
                    quantity: 100,
                    expiryDate: '2024-12-31',
                    batchNumber: 'LOTE001'
                }
            }
        }
    })
    @Post()
    create(@Body() createBatchDTO: createBatchDTO) {
        return this.batchService.create(createBatchDTO);
    }
}
