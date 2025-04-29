import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/user.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [UsuarioModule, DatabaseModule, ProductModule, TransactionModule, SupplierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
