import { Test, TestingModule } from '@nestjs/testing';
import { SchoolMealService } from './school-meal.service';

describe('SchoolMealService', () => {
  let service: SchoolMealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolMealService],
    }).compile();

    service = module.get<SchoolMealService>(SchoolMealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
