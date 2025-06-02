import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { Transaction } from 'src/database/entities/transaction.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { readTransactionDTO } from './dto/read-transaction.dto';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { Brand } from 'src/database/entities/brand.entity';
import { Category } from 'src/database/entities/category.entity';
import { Measurement } from 'src/database/entities/measurement.entity';
import { Tipo_Transacao } from 'src/interfaces/interfaces.types';

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository<Transaction>,

        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository<Supplier>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,

        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,

        @InjectRepository(Measurement)
        private readonly measurementRepository: Repository<Measurement>,
    ){}

    async findAll(): Promise<readTransactionDTO[]> {
        const transactions = await this.transactionRepository.find({
            relations : {
                supplier: true,
                user: true,
                product: true
            }
        });

        return transactions.map(transaction => new readTransactionDTO(transaction))
        
    }

    async findOne(id: string){
        const transaction = await this.transactionRepository.findOne({
            relations : {
                supplier: true,
                user: true,
                product: true
            },
            where: {id}
        })
        if(!transaction){
            throw new HttpException(`Transação ${id} não encontrada`, 400)
        }
        return new readTransactionDTO(transaction);
    }

async create(CreateTransactionDTO: CreateTransactionDTO) {
    const {
        transaction_type,
        quantity,
        price,
        transaction_date,
        product,
        user,
        supplier
    } = CreateTransactionDTO;

    const { 
        name: productName,
        nutrition,
        category,
        brand
    } = product;

    const {
        portion,
        protein_quantity,
        fatness_quantity,
        carbohydrate_quantity,
        measurement
    } = nutrition;

    const transaction = this.transactionRepository.create({
        transaction_type: transaction_type as Tipo_Transacao,
        quantity,
        price,
        transaction_date,

        user: { id: user.id },
        supplier: { id: supplier.id },

        product: {
            name: productName,
            nutrition: {
                portion,
                protein_quantity,
                fatness_quantity,
                carbohydrate_quantity,
                measurement: { id: measurement.id }
            },
            category: { id: category.id },
            brand: { id: brand.id }
        }
    });

    return await this.transactionRepository.save(transaction);
}


    

    async remove(id: string){
        const transaction = await this.transactionRepository.findOne({
            where: {id},
            relations : {
                supplier: true,
                user: true,
                product: true
            },
        })
        if(!transaction){
            throw new NotFoundException("Não encontrado");
        }
        return this.transactionRepository.remove(transaction);
    }

}