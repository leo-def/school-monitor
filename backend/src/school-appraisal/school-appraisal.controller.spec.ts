import { Test, TestingModule } from '@nestjs/testing';
import { SchoolAppraisalController } from './school-appraisal.controller';

describe('SchoolAppraisalController', () => {
  let controller: SchoolAppraisalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolAppraisalController],
    }).compile();

    controller = module.get<SchoolAppraisalController>(SchoolAppraisalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
