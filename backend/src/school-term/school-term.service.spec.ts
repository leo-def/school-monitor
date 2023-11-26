import { Test, TestingModule } from '@nestjs/testing';
import { SchoolTermService } from './school-term.service';

describe('SchoolTermService', () => {
  let service: SchoolTermService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolTermService],
    }).compile();

    service = module.get<SchoolTermService>(SchoolTermService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
