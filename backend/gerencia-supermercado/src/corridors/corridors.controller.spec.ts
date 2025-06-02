import { Test, TestingModule } from '@nestjs/testing';
import { CorridorsController } from './corridors.controller';

describe('CorridorsController', () => {
  let controller: CorridorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorridorsController],
    }).compile();

    controller = module.get<CorridorsController>(CorridorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
