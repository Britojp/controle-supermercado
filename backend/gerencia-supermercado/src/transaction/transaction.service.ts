import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Supplier } from 'src/database/entities/supplier.entity';
import { Transaction } from 'src/database/entities/transaction.entity';
import { User } from 'src/database/entities/user.entity';
import { In, Repository } from 'typeorm';
import { readTransactionDTO } from './dto/read-transaction.dto';
import { createSupplierDTO } from 'src/supplier/dto/create-supplier.dto';
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
                fornecedor: true,
                usuario: true,
                produto: true
            }
        });

        return transactions.map(transaction => new readTransactionDTO(transaction))
        
    }

    async findOne(id: string){
        const transaction = await this.transactionRepository.findOne({
            relations : {
                fornecedor: true,
                usuario: true,
                produto: true
            },
            where: {id}
        })
        if(!transaction){
            throw new HttpException(`Transação ${id} não encontrada`, 400)
        }
        return new readTransactionDTO(transaction);
    }

    async create(createTransactionDTO: createTransactionDTO) {
        const { usuario, fornecedor, produto, preco, quantidade, tipo_transacao } = createTransactionDTO;
        
        const user = await this.userRepository.findOne({
            where: { nome: usuario.nome, email: usuario.email }
        });
    
        if (!user) {
            throw new NotFoundException('Usuário não encontrado');
        }
    
        const supplier = await this.supplierRepository.findOne({
            where: { nome: fornecedor.nome }
        });
    
        if (!supplier) {
            throw new NotFoundException('Fornecedor não encontrado');
        }
    
        const product = await this.productRepository.findOne({
            where: { nome: produto.nome }
        });
    
        if (!product) {
            throw new NotFoundException('Produto não encontrado');
        }
    
        const transaction = this.transactionRepository.create({
            data_transacao: new Date(),
            preco,
            quantidade,
            tipo_transacao,
            usuario: user,
            produto: product,
            fornecedor: supplier,
        });
    
        await this.transactionRepository.save(transaction);
    
        return new readTransactionDTO(transaction);
    }
    

    async remove(id: string){
        const transaction = await this.transactionRepository.findOne({
            where: {id},
            relations : {
                fornecedor: true,
                usuario: true,
                produto: true
            },
        })
        if(!transaction){
            throw new NotFoundException("Não encontrado");
        }
        return this.transactionRepository.remove(transaction);
    }

}
