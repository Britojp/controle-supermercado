import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/database/entities/transaction.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { User } from 'src/database/entities/user.entity';
import { Product } from 'src/database/entities/product.entity';
import { Brand } from 'src/database/entities/brand.entity';
import { Category } from 'src/database/entities/category.entity';
import { Measurement } from 'src/database/entities/measurement.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([
      Transaction,
      Supplier,
      User,
      Product,
      Brand,        
      Category,
      Measurement,])],
  providers: [ TransactionService],
  controllers: [ TransactionController]
})
export class TransactionModule {}
