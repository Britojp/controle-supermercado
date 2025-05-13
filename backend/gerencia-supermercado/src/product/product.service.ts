import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { readProductDTO } from './dto/read-product.dto';
import { Product } from 'src/database/entities/product.entity';
import { Brand } from 'src/database/entities/brand.entity';
import { Nutrition } from 'src/database/entities/nutrition.entity';
import { Category } from 'src/database/entities/category.entity';
import { createProductDTO } from './dto/create-product.dto';
import { Measurement } from 'src/database/entities/measurement.entity';
import { updateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRespository: Repository <Product>,

        @InjectRepository(Brand)
        private readonly brandRepository: Repository <Brand>,

        @InjectRepository(Nutrition)
        private readonly nutritionRepository: Repository <Nutrition>,

        @InjectRepository(Category)
        private readonly categoryRepository: Repository <Category>,

        @InjectRepository(Measurement)
        private readonly measurementRepository: Repository <Measurement>,

    ){}

    async findAll() : Promise <readProductDTO[]> {
        const products = await this.productRespository.find({
            relations : {
                nutrition : {
                    measurement : true,
                },
                category : true,
                brand: true,   
            }
        });
        return products.map(product => new readProductDTO(product))
    }

    async findOne(id: string) {
        const product = await this.productRespository.findOne({
            relations : {
                nutrition : {
                    measurement : true,
                },
                category : true,
                brand: true,   
            },
            where: {id},
        })
        if(!product){
            throw new HttpException(`Produto ${id} não encontrado`,400)
        }
        return new readProductDTO(product)                
    }

    async create(createProductDTO: createProductDTO) {
    const { name, nutrition, category, brand } = createProductDTO;

    let measurement = await this.measurementRepository.findOne({
        where: { name: nutrition.measurement.name, initials: nutrition.measurement.initials }
    });
    if (!measurement) {
        measurement = this.measurementRepository.create(nutrition.measurement);
        await this.measurementRepository.save(measurement);
    }

    const newNutrition = this.nutritionRepository.create({
        portion: nutrition.portion,
        protein_quantity: nutrition.protein_quantity,
        fatness_quantity: nutrition.fatness_quantity,
        carbohydrate_quantity: nutrition.carbohydrate_quantity,
        measurement: measurement,
    });
    await this.nutritionRepository.save(newNutrition);

    let categoryFound = await this.categoryRepository.findOne({
        where: { name: category.name }
    });
    if (!categoryFound) {
        categoryFound = this.categoryRepository.create(category);
        await this.categoryRepository.save(categoryFound);
    }

    let brandFound = await this.brandRepository.findOne({
        where: { name: brand.name }
    });
    if (!brandFound) {
        brandFound = this.brandRepository.create(brand);
        await this.brandRepository.save(brandFound);
    }

    const product = this.productRespository.create({
        name,
        nutrition: newNutrition,
        category: categoryFound,
        brand: brandFound,
    });

    return this.productRespository.save(product);
}


    async update(id: string, dto: updateProductDTO) {
        const existingProduct = await this.productRespository.findOne({
          where: { id },
          relations: ['brand', 'category','brand','nutrition.measurement'],
        });
      
        if (!existingProduct) {
          throw new Error('Produto não encontrado.');
        }
      
        if (dto.nutrition?.measurement) {
          let measurement = await this.measurementRepository.findOneBy({
            name: dto.nutrition.measurement.name,
            initials: dto.nutrition.measurement.initials,
          });
      
          if (!measurement) {
            measurement = this.measurementRepository.create(dto.nutrition.measurement);
            await this.measurementRepository.save(measurement);
          }
      
          existingProduct.nutrition.measurement = measurement;
        }
      
        if (dto.nutrition?.portion) {
          existingProduct.nutrition.portion = dto.nutrition.portion;
        }
      
        if (dto.nutrition?.protein_quantity) {
          existingProduct.nutrition.protein_quantity = dto.nutrition.protein_quantity;
        }
      
        if (dto.nutrition?.fatness_quantity) {
          existingProduct.nutrition.fatness_quantity = dto.nutrition.fatness_quantity;
        }
      
        if (dto.nutrition?.carbohydrate_quantity) {
          existingProduct.nutrition.carbohydrate_quantity = dto.nutrition.carbohydrate_quantity;
        }
      
        if (dto.brand?.name) {
          let brand = await this.brandRepository.findOneBy({ name: dto.brand.name });
          if (!brand) {
            brand = this.brandRepository.create(dto.brand);
            await this.brandRepository.save(brand);
          }
          existingProduct.brand = brand;
        }
      
        if (dto.category?.name) {
          let category = await this.categoryRepository.findOneBy({ name: dto.category.name });
          if (!category) {
            category = this.categoryRepository.create(dto.category);
            this.categoryRepository.save(category);
          }
          existingProduct.category = category;
        }
      
        if (dto.name) {
          existingProduct.name = dto.name;
        }
      
        await this.productRespository.save(existingProduct);
      
        return existingProduct;
      }
      
    

    async remove(id: string){
        const supplier = await this.productRespository.findOne({
            where: {id},
            relations : {
                nutrition : {
                    measurement : true,
                },
                category : true,
                brand: true,   
            }
        })

        if(!supplier){
            throw new NotFoundException("Não encontrado");
        }
        this.productRespository.remove(supplier);
    }
}
