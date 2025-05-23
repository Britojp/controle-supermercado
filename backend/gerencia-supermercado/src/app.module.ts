import { Module } from '@nestjs/common';

import { UsuarioModule } from './usuario/user.module';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { SupplierModule } from './supplier/supplier.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { StateModule } from './state/state.module';


@Module({
  imports: [UsuarioModule, DatabaseModule, ProductModule, TransactionModule, SupplierModule, AuthModule, StateModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {} 
