import { Test, TestingModule } from '@nestjs/testing';
import { SchoolAppraisalService } from './school-appraisal.service';

describe('SchoolAppraisalService', () => {
  let service: SchoolAppraisalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolAppraisalService],
    }).compile();

    service = module.get<SchoolAppraisalService>(SchoolAppraisalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
