import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { Transaction } from 'src/database/entities/transaction.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { readTransactionDTO } from './dto/read-transaction.dto';
import { createTransactionDTO } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {

    constructor(
        @InjectRepository(Transaction)
        private readonly transactionRepository: Repository <Transaction>,

        @InjectRepository(Supplier)
        private readonly supplierRepository: Repository <Supplier>,

        @InjectRepository(User)
        private readonly userRepository: Repository <User>,

        @InjectRepository(Product)
        private readonly productRepository: Repository <Product>
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

    async create(createTransactionDTO: createTransactionDTO) {
        const { user, supplier, product, price, quantity, transaction_type } = createTransactionDTO;
        
        const usuario = await this.userRepository.findOne({
            where: { name: user.name, email: user.email }
        });
    
        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado');
        }
    
        const fornecedor = await this.supplierRepository.findOne({
            where: { name: supplier.name }
        });
    
        if (!fornecedor) {
            throw new NotFoundException('Fornecedor não encontrado');
        }
    
        const produto = await this.productRepository.findOne({
            where: { name: product.name }
        });
    
        if (!produto) {
            throw new NotFoundException('Produto não encontrado');
        }
    
        const transaction = this.transactionRepository.create({
            transaction_date: new Date(),
            price,
            quantity,
            transaction_type,
            user: user,
            product: product,
            supplier: supplier,
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
            throw new NotFoundException("Não encontrado");
        }
        return this.transactionRepository.remove(transaction);
    }

}
