import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { Transaction } from 'src/database/entities/transaction.entity';
import { User } from 'src/database/entities/user.entity';
import { In, Repository } from 'typeorm';
import { readTransactionDTO } from './dto/read-transaction.dto';

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
                fornecedor: true,
                usuario: true,
                produto: true
            }
        });

        return transactions.map(transaction => new readTransactionDTO(transaction))
        
    }


}
