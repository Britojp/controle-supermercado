import { createBatchDTO } from './dto/create-batch.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import { BatchNotFoundError } from './errors/batch-not-found.error';

@Injectable()
export class BatchService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,

        @InjectRepository(Batch)
        private readonly batchRepository: Repository<Batch>,
    ) {}

    async findAll(): Promise<Batch[]> {
    const batches = await this.batchRepository.find({
            relations: {
                product: true,
            },
        });

        if(!batches || batches.length === 0) {
            throw new BatchNotFoundError(`Lotes não encontrados`);
        }

        return batches;
    }

    async create(createBatchDTO: createBatchDTO): Promise<Batch> {
        const product = await this.productRepository.findOneBy({ id: createBatchDTO.productId });
        if (!product) {
            throw new Error('produto não encontrado');
        }

        const batch = this.batchRepository.create({
            ...createBatchDTO,
            product,
        });

        return this.batchRepository.save(batch);
    }

}
