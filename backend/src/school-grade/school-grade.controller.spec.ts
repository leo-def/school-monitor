import { Test, TestingModule } from '@nestjs/testing';
import { SchoolGradeController } from './school-grade.controller';

describe('SchoolGradeController', () => {
  let controller: SchoolGradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolGradeController],
    }).compile();

    controller = module.get<SchoolGradeController>(SchoolGradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
