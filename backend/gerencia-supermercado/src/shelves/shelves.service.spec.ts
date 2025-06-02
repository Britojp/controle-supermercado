import { Test, TestingModule } from '@nestjs/testing';
import { ShelvesService } from './shelves.service';

describe('ShelvesService', () => {
  let service: ShelvesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShelvesService],
    }).compile();

    service = module.get<ShelvesService>(ShelvesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
