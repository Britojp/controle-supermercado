import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Nutrition } from 'src/database/entities/nutrition.entity';
import { Measurement } from 'src/database/entities/measurement.entity';
import { Category } from 'src/database/entities/category.entity';
import { Brand } from 'src/database/entities/brand.entity';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Nutrition, Measurement, Category, Brand, Batch])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
