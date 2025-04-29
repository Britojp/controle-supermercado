import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from 'src/database/entities/supplier.entity';
import { State } from 'src/database/entities/state.entity';
import { Address } from 'src/database/entities/address.entity';
import { Contact } from 'src/database/entities/contact.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Supplier, State, Address, Contact])],
  providers: [ SupplierService],
  controllers: [ SupplierController]
})
export class SupplierModule {}
