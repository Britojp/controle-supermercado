import { Module } from '@nestjs/common';

import { UsuarioModule } from './usuario/user.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { SupplierModule } from './supplier/supplier.module';


@Module({
  imports: [UsuarioModule, DatabaseModule, ProductModule, TransactionModule, SupplierModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
