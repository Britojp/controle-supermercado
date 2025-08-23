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
import { TransactionNotFoundError } from './errors/transaction-not-found.error';
import { UserNotFoundError } from 'src/usuario/errors/user-not-found.error';
import { SupplierNotFoundError } from 'src/supplier/errors/supplier-not-found.error';

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

        if(!transactions || transactions.length === 0) {
            throw new TransactionNotFoundError(`Transações não encontradas`);
        }

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
            throw new TransactionNotFoundError(`Transação ${id} não encontrada`);
        }
        return new readTransactionDTO(transaction);
    }

    async create(createTransactionDTO: CreateTransactionDTO){
        const { user, supplier, product } = createTransactionDTO;
        
        const userEntity = await this.userRepository.findOne({ where: { id: user.id } });
        if (!userEntity) {
            throw new UserNotFoundError(`Usuário com ID ${user.id} não encontrado`);
        }

        const supplierEntity = await this.supplierRepository.findOne({ where: { id: supplier.id } });
        if (!supplierEntity) {
            throw new SupplierNotFoundError(`Fornecedor com ID ${supplier.id} não encontrado`);
        }

        const productEntity = this.productRepository.create({
            name: product.name,
            nutrition: {
                portion: product.nutrition.portion,
                carbohydrate_quantity: product.nutrition.carbohydrate_quantity,
                protein_quantity: product.nutrition.protein_quantity,
                fatness_quantity: product.nutrition.fatness_quantity,
                measurement: {
                    id: product.nutrition.measurement.id,
                } as Measurement,
            },
            brand: product.brand,
            category: product.category,
        })
        await this.productRepository.save(productEntity);

        const transaction = this.transactionRepository.create({
            transaction_type: createTransactionDTO.transaction_type as Tipo_Transacao,
            quantity: createTransactionDTO.quantity,
            price: createTransactionDTO.price,
            user: userEntity,
            supplier: supplierEntity,
            product: productEntity,
        });
    
        await this.transactionRepository.save(transaction);
        return new readTransactionDTO(transaction);
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
            throw new TransactionNotFoundError("Não encontrado");
        }
        return this.transactionRepository.remove(transaction);
    }

}