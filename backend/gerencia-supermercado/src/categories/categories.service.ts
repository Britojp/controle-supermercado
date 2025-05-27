import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { ReadCategoriesDTO } from './dto/read-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

    async findAll(): Promise<ReadCategoriesDTO[]> {
        const categories = await this.categoryRepository.find({});
        return categories.map(category => new ReadCategoriesDTO(category));
    }
}