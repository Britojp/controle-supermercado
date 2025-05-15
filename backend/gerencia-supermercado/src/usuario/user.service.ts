import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../database/entities/user.entity';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}


    async findAll(){
        return this.userRepository.find()
    }

    async findByEmail(email: string){
        const user = await this.userRepository.findOne({
            where: {email},
        })
            if(!user){
                throw new HttpException(`Email ${email} não encontrado`, 400)
            }
        return user;
    }

    async create(createUserDTO: createUserDTO){
        const data = {
            ...createUserDTO,
            password: await bcrypt.hash(createUserDTO.password, 10),
        };

        const createdUser = await this.userRepository.save(data);

        return{
            ...createdUser,
            password: undefined,
        };

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

