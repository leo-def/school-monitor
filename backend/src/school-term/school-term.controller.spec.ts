import { Test, TestingModule } from '@nestjs/testing';
import { SchoolTermController } from './school-term.controller';

describe('SchoolTermController', () => {
  let controller: SchoolTermController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolTermController],
    }).compile();

    controller = module.get<SchoolTermController>(SchoolTermController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
