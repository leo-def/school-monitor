import { Test, TestingModule } from '@nestjs/testing';
import { SchoolMealController } from './school-meal.controller';

describe('SchoolMealController', () => {
  let controller: SchoolMealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolMealController],
    }).compile();

    controller = module.get<SchoolMealController>(SchoolMealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
