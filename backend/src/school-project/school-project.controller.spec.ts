import { Test, TestingModule } from '@nestjs/testing';
import { SchoolProjectController } from './school-project.controller';

describe('SchoolProjectController', () => {
  let controller: SchoolProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolProjectController],
    }).compile();

    controller = module.get<SchoolProjectController>(SchoolProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
