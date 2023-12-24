import { Test, TestingModule } from '@nestjs/testing';
import { GradeTemplateService } from './grade-template.service';

describe('GradeTemplateService', () => {
  let service: GradeTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradeTemplateService],
    }).compile();

    service = module.get<GradeTemplateService>(GradeTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
