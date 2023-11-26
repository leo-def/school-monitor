import { Test, TestingModule } from '@nestjs/testing';
import { SchoolProjectService } from './school-project.service';

describe('SchoolProjectService', () => {
  let service: SchoolProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolProjectService],
    }).compile();

    service = module.get<SchoolProjectService>(SchoolProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
