import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService){}

    @Get()
    findAll(){
        return this.transactionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.transactionService.findOne(id);
    }

    @Post()
    create(
      @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) 
      CreateTransactionDTO: CreateTransactionDTO
    ){
        return this.transactionService.create(CreateTransactionDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.transactionService.remove(id);
    }
}
