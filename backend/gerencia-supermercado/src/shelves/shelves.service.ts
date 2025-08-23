import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shelf } from 'src/database/entities/shelf.entity';
import { Repository } from 'typeorm';
import { ShelvesNotFoundError } from './errors/shelves-not-found.error';

@Injectable()
export class ShelvesService {
    constructor(@InjectRepository(Shelf) private readonly shelvesRepository: Repository<Shelf>,
){}

    async findAll(): Promise<Shelf[]> {
        const shelves = await this.shelvesRepository.find({});

        if(!shelves || shelves.length === 0) {
            throw new ShelvesNotFoundError(`Prateleiras não encontradas`);
        }
        return shelves;
    }

}
