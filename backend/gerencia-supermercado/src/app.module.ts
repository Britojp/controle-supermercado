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
import { BrandModule } from './brand/brand.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { MeasurementController } from './measurement/measurement.controller';
import { MeasurementService } from './measurement/measurement.service';
import { MeasurementModule } from './measurement/measurement.module';
import { CorridorsController } from './corridors/corridors.controller';
import { CorridorsModule } from './corridors/corridors.module';
import { ShelvesService } from './shelves/shelves.service';
import { ShelvesModule } from './shelves/shelves.module';


@Module({
  imports: [UsuarioModule, DatabaseModule, ProductModule, TransactionModule, SupplierModule, AuthModule, StateModule, BrandModule, CategoriesModule, MeasurementModule, CorridorsModule, ShelvesModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {} 
