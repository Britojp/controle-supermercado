import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { State } from 'src/database/entities/state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StateService],
  controllers: [StateController]
})
export class StateModule {}
