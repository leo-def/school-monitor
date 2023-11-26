import { Test, TestingModule } from '@nestjs/testing';
import { SchoolAbsenceService } from './school-absence.service';

describe('SchoolAbsenceService', () => {
  let service: SchoolAbsenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolAbsenceService],
    }).compile();

    service = module.get<SchoolAbsenceService>(SchoolAbsenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
