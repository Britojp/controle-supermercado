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
                nutricao : {
                    unidademedida : true,
                },
                categoria : true,
                marca: true,   
            }
        });
        return products.map(product => new readProductDTO(product))
    }

    async findOne(id: string) {
        const product = await this.productRespository.findOne({
            relations : {
                nutricao : {
                    unidademedida : true,
                },
                categoria : true,
                marca: true,   
            },
            where: {id},
        })
        if(!product){
            throw new HttpException(`Produto ${id} não encontrado`,400)
        }
        return new readProductDTO(product)                
    }

    async create(createProductDTO: createProductDTO) {
        const { nome, nutricao, categoria, marca } = createProductDTO;

        let unidade_medida = await this.measurementRepository.findOne({
            where: { nome: nutricao.unidade_medida.nome, sigla: nutricao.unidade_medida.sigla }
        });
        if (!unidade_medida) {
            unidade_medida = this.measurementRepository.create(nutricao.unidade_medida);
            await this.measurementRepository.save(unidade_medida);
        }

        const newNutrition = this.nutritionRepository.create({
            porcao: nutricao.porcao,
            quantidade_proteina: nutricao.quantidade_proteina,
            quantidade_gordura: nutricao.quantidade_gordura,
            quantidade_carboidrato: nutricao.quantidade_carboidrato,
            unidademedida: unidade_medida,
        });
        await this.nutritionRepository.save(newNutrition);

        let categoriaVerify = await this.categoryRepository.findOne({
            where: { nome: categoria.nome }
        });
        if (!categoriaVerify) {
            categoriaVerify = this.categoryRepository.create(categoria);
            await this.categoryRepository.save(categoriaVerify);
        }

        let marcaVerify = await this.brandRepository.findOne({
            where: { nome: marca.nome }
        });
        if (!marcaVerify) {
            marcaVerify = this.brandRepository.create(marca);
            await this.brandRepository.save(marcaVerify);
        }

        const product = this.productRespository.create({
            nome,
            nutricao: newNutrition,
            categoria: categoriaVerify,
            marca: marcaVerify,
        });
        return this.productRespository.save(product);
    }

    async update(id: string, dto: updateProductDTO) {
        const existingProduct = await this.productRespository.findOne({
          where: { id },
          relations: ['marca', 'categoria', 'nutricao', 'nutricao.unidademedida'],
        });
      
        if (!existingProduct) {
          throw new Error('Produto não encontrado.');
        }
      
        if (dto.nutricao?.unidade_medida) {
          let measurement = await this.measurementRepository.findOneBy({
            nome: dto.nutricao.unidade_medida.nome,
            sigla: dto.nutricao.unidade_medida.sigla,
          });
      
          if (!measurement) {
            measurement = this.measurementRepository.create(dto.nutricao.unidade_medida);
            await this.measurementRepository.save(measurement);
          }
      
          existingProduct.nutricao.unidademedida = measurement;
        }
      
        if (dto.nutricao?.porcao) {
          existingProduct.nutricao.porcao = dto.nutricao.porcao;
        }
      
        if (dto.nutricao?.quantidade_proteina) {
          existingProduct.nutricao.quantidade_proteina = dto.nutricao.quantidade_proteina;
        }
      
        if (dto.nutricao?.quantidade_gordura) {
          existingProduct.nutricao.quantidade_gordura = dto.nutricao.quantidade_gordura;
        }
      
        if (dto.nutricao?.quantidade_carboidrato) {
          existingProduct.nutricao.quantidade_carboidrato = dto.nutricao.quantidade_carboidrato;
        }
      
        if (dto.marca?.nome) {
          let brand = await this.brandRepository.findOneBy({ nome: dto.marca.nome });
          if (!brand) {
            brand = this.brandRepository.create(dto.marca);
            await this.brandRepository.save(brand);
          }
          existingProduct.marca = brand;
        }
      
        if (dto.categoria?.nome) {
          let category = await this.categoryRepository.findOneBy({ nome: dto.categoria.nome });
          if (!category) {
            category = this.categoryRepository.create(dto.categoria);
            await this.categoryRepository.save(category);
          }
          existingProduct.categoria = category;
        }
      
        if (dto.nome) {
          existingProduct.nome = dto.nome;
        }
      
        await this.productRespository.save(existingProduct);
      
        return existingProduct;
      }
      
    

    async remove(id: string){
        const supplier = await this.productRespository.findOne({
            where: {id},
            relations : {
                nutricao : {
                    unidademedida : true,
                },
                categoria : true,
                marca: true,   
            }
        })

        if(!supplier){
            throw new NotFoundException("Não encontrado");
        }
        this.productRespository.remove(supplier);
    }
}
