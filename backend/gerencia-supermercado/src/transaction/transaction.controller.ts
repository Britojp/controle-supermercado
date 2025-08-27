import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('Transações')
@ApiBearerAuth()
@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService){}

    @ApiOperation({ summary: 'Listar todas as transações' })
    @ApiResponse({ status: 200, description: 'Lista de transações retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Get()
    findAll(){
        return this.transactionService.findAll();
    }

    @ApiOperation({ summary: 'Listar uma transação' })
    @ApiParam({ name: 'id', description: 'ID da transação' })
    @ApiResponse({ status: 200, description: 'Transação retornada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.transactionService.findOne(id);
    }

    @ApiOperation({ summary: 'Criar uma nova transação' })
    @ApiResponse({ status: 201, description: 'Transação criada com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @ApiBody({
        type: CreateTransactionDTO,
        description: 'Dados para criação da transação',
        examples: {
            exemplo_entrada: {
                summary: 'Exemplo de criação de transação de entrada',
                value: {
                    transaction_type: 'ENTRADA',
                    quantity: 10,
                    price: 150.5,
                    transaction_date: '2024-06-01',
                    user: {
                        id: 'user-123'
                    },
                    supplier: {
                        id: 'supplier-456'
                    },
                    product: {
                        name: 'Arroz Integral',
                        nutrition: {
                            portion: 100,
                            protein_quantity: 7.5,
                            fatness_quantity: 1.2,
                            carbohydrate_quantity: 77.0,
                            measurement: {
                                id: 'measurement-789'
                            }
                        },
                        category: {
                            id: 'category-321'
                        },
                        brand: {
                            id: 'brand-654'
                        }
                    }
                }
            },
            exemplo_saida: {
                summary: 'Exemplo de saída de transação',
                value: {
                    transaction_type: 'SAIDA',
                    quantity: 5,
                    price: 80.0,
                    transaction_date: '2024-06-02',
                    user: {
                        id: 'user-456'
                    },
                    supplier: {
                        id: 'supplier-789'
                    },
                    product: {
                        name: 'Feijão Preto',
                        nutrition: {
                            portion: 100,
                            protein_quantity: 8.7,
                            fatness_quantity: 0.5,
                            carbohydrate_quantity: 62.4,
                            measurement: {
                                id: 'measurement-321'
                            }
                        },
                        category: {
                            id: 'category-654'
                        },
                        brand: {
                            id: 'brand-987'
                        }
                    }
                }
            }
        }
    })
    @Post()
    create(
      @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) 
      CreateTransactionDTO: CreateTransactionDTO
    ){
        return this.transactionService.create(CreateTransactionDTO);
    }

    @ApiOperation({ summary: 'Excluir uma transação' })
    @ApiParam({ name: 'id', description: 'ID da transação' })
    @ApiResponse({ status: 204, description: 'Transação excluída com sucesso' })
    @ApiResponse({ status: 401, description: 'Não autorizado - Token JWT inválido ou ausente' })
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.transactionService.remove(id);
    }
}
