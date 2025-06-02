import { Module, Type } from '@nestjs/common';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';
import { Measurement } from 'src/database/entities/measurement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    exports: [MeasurementService],
    imports: [TypeOrmModule.forFeature([Measurement])],
    controllers: [MeasurementController],
    providers: [MeasurementService],
})
export class MeasurementModule {}
