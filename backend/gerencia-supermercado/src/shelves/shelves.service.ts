import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shelf } from 'src/database/entities/shelf.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShelvesService {
    constructor(@InjectRepository(Shelf) private readonly shelvesRepository: Repository<Shelf>,
){}

    async findAll(): Promise<Shelf[]> {
        return this.shelvesRepository.find({});
    }

}
