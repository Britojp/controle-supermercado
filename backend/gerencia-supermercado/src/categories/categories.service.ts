import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { ReadCategoriesDTO } from './dto/read-categories.dto';
import { CategoriesNotFoundError } from './errors/categories-not-found.error';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

    async findAll(): Promise<ReadCategoriesDTO[]> {
        const categories = await this.categoryRepository.find({});

        if(!categories || categories.length === 0) {
            throw new CategoriesNotFoundError(`Categorias não encontradas`);
        }

        return categories.map(category => new ReadCategoriesDTO(category));
    }
}