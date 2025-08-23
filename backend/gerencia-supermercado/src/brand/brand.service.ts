import { createBrandDTO } from './dto/create-brands.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readBrandsDTO } from './dto/read-brands.dto';
import { Repository } from 'typeorm';
import { Brand } from 'src/database/entities/brand.entity';
import { BrandNotFoundError } from './errors/brand-not-found.error';
import { BrandNotCreatedError } from './errors/brand-created-error.error';


@Injectable()
export class BrandService {

    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
    ){}

    async findAll(): Promise <readBrandsDTO[]> {
        const brands = await this.brandRepository.find({})
        if(!brands || brands.length === 0) {
            throw new BrandNotFoundError(`Marcas não encontradas`);
        }
        return brands.map(brands => new readBrandsDTO(brands))
    }
    
    async create(createBrandDTO : createBrandDTO){
        const brand = this.brandRepository.create({
            ...createBrandDTO
        })

        if(!brand){
            throw new BrandNotCreatedError("Houve um erro ao criar a marca");
        }

        return this.brandRepository.save(brand)
    }


}
