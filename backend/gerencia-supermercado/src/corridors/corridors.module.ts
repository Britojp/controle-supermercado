import { Module } from '@nestjs/common';
import { CorridorsService } from './corridors.service';
import { CorridorsController } from './corridors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corridor } from 'src/database/entities/corridor.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Corridor])],
  controllers: [CorridorsController],
  providers: [CorridorsService]
})
export class CorridorsModule {}
