import { Test, TestingModule } from '@nestjs/testing';
import { BatchController } from './batch.controller';
import { BatchService } from './batch.service';
import type { createBatchDTO } from './dto/create-batch.dto';
import { BadRequestException } from '@nestjs/common';

describe('BatchController', () => {
  let controller: BatchController;
  let service: BatchService;

  const mockBatchService = {
    findAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatchController],
      providers: [
        {
          provide: BatchService,
          useValue: mockBatchService,
        },
      ]
    }).compile();

    controller = module.get<BatchController>(BatchController);
    service = module.get<BatchService>(BatchService)
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

describe('findAll', () => {
  it('should call service.findAll and return result', async () => {
    const mockBatches = [
      { id: '1', name: 'Batch 1' },
      { id: '2', name: 'Batch 2' },
    ];

    mockBatchService.findAll.mockResolvedValue(mockBatches);

    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalledTimes(1);
    expect(service.findAll).toHaveBeenCalledWith();
    expect(result).toEqual(mockBatches);
  })
  
  it('should handle empty result from service', async () => {
    mockBatchService.findAll.mockResolvedValue([]);

    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual([]);
  })  
  
    describe('create', () =>{
      it('should call service.create with correct DTO and return result', async () => {
        const createBatchDto: createBatchDTO = {
          name: 'Batch 1',
          validate_date: new Date(),
          quantity: 100,
          productId: '1',
          location_batch: {
            shelves: { name: 'Shelf 1' },
            corridors: { name: 'Corridor 1' },
          },
        };
        
        const mockCreatedBatch = { id: '1', name: 'Batch 1' };

        mockBatchService.create.mockResolvedValue(mockCreatedBatch);

        const result = await controller.create(createBatchDto);

        expect(service.create).toHaveBeenCalledTimes(1);
        expect(service.create).toHaveBeenCalledWith(createBatchDto);
        expect(result).toEqual(mockCreatedBatch);
      })
        it('should propagate service errors without modification', async () => {
          const createBatchDto: createBatchDTO = {
            name: 'Batch 1',
            validate_date: new Date(),
            quantity: 100,
            productId: '1',
            location_batch: {
              shelves: { name: 'Shelf 1' },
              corridors: { name: 'Corridor 1' },
            },
          }

          const serviceError = new BadRequestException('Batch already exists');
          mockBatchService.create.mockRejectedValue(serviceError);

          await expect(controller.create(createBatchDto)).rejects.toThrow(BadRequestException);
          expect(service.create).toHaveBeenCalledWith(createBatchDto);
        })
    })


  });
});
