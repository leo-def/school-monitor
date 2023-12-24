import { Test, TestingModule } from '@nestjs/testing';
import { SchoolGradeService } from './school-grade.service';

describe('SchoolGradeService', () => {
  let service: SchoolGradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolGradeService],
    }).compile();

    service = module.get<SchoolGradeService>(SchoolGradeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
