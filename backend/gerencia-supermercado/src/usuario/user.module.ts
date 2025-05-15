import { Module } from '@nestjs/common';
import { UsuarioController } from './user.controller';
import { UsuarioService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';

@Module({
      imports: [TypeOrmModule.forFeature([User])],
      controllers: [UsuarioController],
      providers: [UsuarioService],
      exports: [UsuarioService],
})
export class UsuarioModule {

}
