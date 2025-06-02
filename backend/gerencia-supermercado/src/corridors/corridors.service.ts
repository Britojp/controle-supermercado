import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Corridor } from 'src/database/entities/corridor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CorridorsService {
    constructor(@InjectRepository(Corridor)
    private readonly corridorRepository: Repository<Corridor>,
) {}

    async findAll(): Promise<Corridor[]> {
        return this.corridorRepository.find({});
    }
}
