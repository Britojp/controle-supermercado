import { createBrandDTO } from './dto/create-brands.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readBrandsDTO } from './dto/read-brands.dto';
import { Repository } from 'typeorm';
import { Brand } from 'src/database/entities/brand.entity';


@Injectable()
export class BrandService {

    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
    ){}

    async findAll(): Promise <readBrandsDTO[]> {
        const brands = await this.brandRepository.find({})
        return brands.map(brands => new readBrandsDTO(brands))
    }
    
    async create(createBrandDTO : createBrandDTO){
        const brand = this.brandRepository.create({
            ...createBrandDTO
        })
        return this.brandRepository.save(brand)
    }


}
