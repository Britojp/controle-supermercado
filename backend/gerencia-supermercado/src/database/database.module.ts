import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Brand } from 'src/database/entities/brand.entity';
import { Category } from 'src/database/entities/category.entity';
import { Contact } from 'src/database/entities/contact.entity';
import { Corridor } from 'src/database/entities/corridor.entity';
import { Measurement } from 'src/database/entities/measurement.entity';
import { Nutrition } from 'src/database/entities/nutrition.entity';
import { Product } from 'src/database/entities/product.entity';
import { Shelf } from 'src/database/entities/shelf.entity';
import { State } from 'src/database/entities/state.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { User } from 'src/database/entities/user.entity';
import { DataSourceOptions } from 'typeorm';
import { Transaction } from 'src/database/entities/transaction.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Stock_location } from './entities/stock_location.entity';
import * as dotenv from "dotenv"

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        Address, 
        Batch, 
        Brand, 
        Category, 
        Contact, 
        Corridor, 
        Measurement, 
        Nutrition, 
        Product, 
        Shelf, 
        State, 
        Supplier, 
        Transaction, 
        User,
        Stock_location
    ],
    synchronize: false,
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {
                ...dataSourceOptions,
            }
        },
    }),
],

})
export class DatabaseModule {}
