import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/database/entities/transaction.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { User } from 'src/database/entities/user.entity';
import { Product } from 'src/database/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Transaction,
    Supplier, 
    User, 
    Product])],
  providers: [ TransactionService],
  controllers: [ TransactionController]
})
export class TransactionModule {}
