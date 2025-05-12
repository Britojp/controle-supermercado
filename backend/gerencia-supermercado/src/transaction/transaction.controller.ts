import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { createTransactionDTO } from './dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService){}

    @Get()
    findAll(){
        return this.transactionService.findAll();
    }

    @Get(':id')
    findOne(@Param(':id') id: string){
        return this.transactionService.findOne(id);
    }

    @Post()
    create(@Body() createTransactionDTO: createTransactionDTO){
        return this.transactionService.create(createTransactionDTO);
    }

    @Delete(':id')
    remove(@Param(':id') id: string){
        return this.transactionService.remove(id);
    }

}
