import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSectionService } from './school-section.service';

describe('SchoolSectionService', () => {
  let service: SchoolSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolSectionService],
    }).compile();

    service = module.get<SchoolSectionService>(SchoolSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
