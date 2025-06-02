import { Module } from '@nestjs/common';
import { ShelvesController } from './shelves.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shelf } from 'src/database/entities/shelf.entity';
import { ShelvesService } from './shelves.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shelf])],
  providers: [ShelvesService],
  controllers: [ShelvesController]
})
export class ShelvesModule {}
