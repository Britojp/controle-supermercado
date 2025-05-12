import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../database/entities/user.entity';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}


    async findAll(){
        return this.userRepository.find()
    }

    async findOne(id: string){
        const user = await this.userRepository.findOne({
            where: {id},
        })
            if(!user){
                throw new HttpException(`Usuário ${id} não encontrado`, 400)
            }
        return user;
    }

async create(createUserDTO : createUserDTO){
        const user = this.userRepository.create(createUserDTO);
        return this.userRepository.save(user);
    }

async update(id: string, updateUserDTO: updateUserDTO){
    const user = await this.userRepository.preload({
        id,
        ...updateUserDTO
    });
    if(!user){
        throw new NotFoundException("Não encontrado");
    }
    return this.userRepository.save(user);
}
    
    async remove(id: string){
        const user = await this.userRepository.findOne({
            where: {id},
        })
        if(!user){
            throw new NotFoundException("Não encontrado");
        }
        return this.userRepository.remove(user);
    }
}

