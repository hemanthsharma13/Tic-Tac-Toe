import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { RootNode, treeNode } from './dto/tree.dto';

describe('AnimalsController', () => {
  let controller: AnimalsController;
  let service: AnimalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers: [AnimalsService],
    }).compile();

    controller = module.get<AnimalsController>(AnimalsController);
    service = module.get<AnimalsService>(AnimalsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('find all the nodes', () => {
    it('should return an array of animals along with ids', async () => {
      const result = [treeNode];
      jest.spyOn(controller, 'findAll').mockImplementation(() => result);
      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create a new node with label', () => {
    it('Node With New Label', async () => {
      jest.spyOn(controller, 'create').mockResolvedValue(RootNode);
      let testObj = { id: '7', label: 'test' };
      const result = await controller.create(testObj);
      expect(result).toEqual(RootNode);
    });
  });
});
