import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSubjectController } from './school-subject.controller';

describe('SchoolSubjectController', () => {
  let controller: SchoolSubjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSubjectController],
    }).compile();

    controller = module.get<SchoolSubjectController>(SchoolSubjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
