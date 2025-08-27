import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from 'src/database/entities/state.entity';
import { Repository } from 'typeorm';
import { readStatesDTO } from './dto/read-state.dto';
import { StateNotFoundError } from './errors/state-not-found.error';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(State)
        private readonly stateRepository: Repository <State>,
    ){}

    
    async findAll(): Promise<readStatesDTO[]> {
        const states = await this.stateRepository.find()

        if(!states || states.length === 0) {
            throw new StateNotFoundError(`Estados não encontrados`);
        }

        return states.map(state => new readStatesDTO(state)) 
    }

}
