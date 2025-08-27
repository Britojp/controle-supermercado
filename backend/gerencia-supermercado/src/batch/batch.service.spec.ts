import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BatchService } from './batch.service';
import { Batch } from '../database/entities/batch.entity';
import { Product } from '../database/entities/product.entity';
import { createBatchDTO } from './dto/create-batch.dto';

describe('BatchService', () => {
  let service: BatchService;
  let batchRepository: Repository<Batch>;
  let productRepository: Repository<Product>;

  const mockBatchRepository = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  const mockProductRepository = {
    findOneBy: jest.fn(),
  };

  const mockProduct: Product = {
    id: '1',
    name: 'Produto 1',
    nutrition: null as any,
    category: null as any,
    brand: null as any,
    transaction: null as any,
  } as Product;

  const mockBatch: Batch = {
    id: '1',
    number: 'LOTE001',
    validate_date: new Date('2024-12-31'),
    quantity: 100,
    product: mockProduct,
    transaction: null as any,
    locations: [],
  };

  const mockCreateBatchDto: createBatchDTO = {
    name: 'LOTE001',
    validate_date: new Date('2024-12-31'),
    quantity: 100,
    productId: 'product-123',
    location_batch: {
      shelves: { name: 'Prateleira 1' },
      corridors: { name: 'Corredor A' }
    }
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BatchService,
        {
          provide: getRepositoryToken(Batch),
          useValue: mockBatchRepository,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    service = module.get<BatchService>(BatchService);
    batchRepository = module.get<Repository<Batch>>(getRepositoryToken(Batch));
    productRepository = module.get<Repository<Product>>(getRepositoryToken(Product));

    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('deve retornar todos os batches do repositório', async () => {
      const mockBatches = [
        mockBatch,
        { ...mockBatch, id: '2', number: 'LOTE002', quantity: 50 }
      ];
      mockBatchRepository.find.mockResolvedValue(mockBatches);

      const result = await service.findAll();

      expect(batchRepository.find).toHaveBeenCalledWith({
        relations: {
          product: true,
        },
      });
      expect(batchRepository.find).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockBatches);
    });

    it('deve lançar BatchNotFoundError quando não há batches', async () => {
      mockBatchRepository.find.mockResolvedValue([]);

      await expect(service.findAll()).rejects.toThrow('Lotes não encontrados');
      expect(batchRepository.find).toHaveBeenCalledWith({
        relations: {
          product: true,
        },
      });
    });

    it('deve tratar erros do repositório', async () => {
      const repositoryError = new Error('Erro de banco de dados');
      mockBatchRepository.find.mockRejectedValue(repositoryError);

      await expect(service.findAll()).rejects.toThrow(repositoryError);
      expect(batchRepository.find).toHaveBeenCalledWith({
        relations: {
          product: true,
        },
      });
    });
  });

  describe('create', () => {
    it('deve criar batch com sucesso quando produto existe', async () => {
      const batchToCreate = {
        ...mockCreateBatchDto,
        product: mockProduct,
      };

      const createdBatch = {
        id: '1',
        ...batchToCreate,
        number: mockCreateBatchDto.name,
        transaction: null,
        locations: [],
      };

      mockProductRepository.findOneBy.mockResolvedValue(mockProduct);
      mockBatchRepository.create.mockReturnValue(batchToCreate);
      mockBatchRepository.save.mockResolvedValue(createdBatch);

      const result = await service.create(mockCreateBatchDto);

      expect(productRepository.findOneBy).toHaveBeenCalledWith({ id: mockCreateBatchDto.productId });
      expect(batchRepository.create).toHaveBeenCalledWith(batchToCreate);
      expect(batchRepository.save).toHaveBeenCalledWith(batchToCreate);
      expect(batchRepository.save).toHaveBeenCalledTimes(1);
      expect(result).toEqual(createdBatch);
    });

    it('deve lançar erro quando produto não existe', async () => {
      mockProductRepository.findOneBy.mockResolvedValue(null);

      await expect(service.create(mockCreateBatchDto)).rejects.toThrow('produto não encontrado');
      expect(productRepository.findOneBy).toHaveBeenCalledWith({ id: mockCreateBatchDto.productId });
      expect(batchRepository.create).not.toHaveBeenCalled();
      expect(batchRepository.save).not.toHaveBeenCalled();
    });

    it('deve tratar erros de busca do produto', async () => {
      const findError = new Error('Erro ao buscar produto');
      mockProductRepository.findOneBy.mockRejectedValue(findError);

      await expect(service.create(mockCreateBatchDto)).rejects.toThrow(findError);
    });

    it('deve tratar erros de salvamento no repositório', async () => {
      const batchToCreate = {
        ...mockCreateBatchDto,
        product: mockProduct,
      };

      mockProductRepository.findOneBy.mockResolvedValue(mockProduct);
      mockBatchRepository.create.mockReturnValue(batchToCreate);
      const saveError = new Error('Erro ao salvar batch');
      mockBatchRepository.save.mockRejectedValue(saveError);

      await expect(service.create(mockCreateBatchDto)).rejects.toThrow(saveError);
      expect(productRepository.findOneBy).toHaveBeenCalledWith({ id: mockCreateBatchDto.productId });
      expect(batchRepository.create).toHaveBeenCalledWith(batchToCreate);
    });
  });
});
