import { Test, TestingModule } from '@nestjs/testing';
import { CorridorsService } from './corridors.service';

describe('CorridorsService', () => {
  let service: CorridorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorridorsService],
    }).compile();

    service = module.get<CorridorsService>(CorridorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
