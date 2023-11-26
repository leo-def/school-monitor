import { Test, TestingModule } from '@nestjs/testing';
import { SchoolSectionController } from './school-section.controller';

describe('SchoolSectionController', () => {
  let controller: SchoolSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolSectionController],
    }).compile();

    controller = module.get<SchoolSectionController>(SchoolSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
