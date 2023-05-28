import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsService } from './animals.service';
import { treeNode } from './dto/tree.dto';

describe('AnimalsService', () => {
  let service: AnimalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimalsService],
    }).compile();

    service = module.get<AnimalsService>(AnimalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
