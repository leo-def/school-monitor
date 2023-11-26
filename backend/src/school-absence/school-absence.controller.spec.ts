import { Test, TestingModule } from '@nestjs/testing';
import { SchoolAbsenceController } from './school-absence.controller';

describe('SchoolAbsenceController', () => {
  let controller: SchoolAbsenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolAbsenceController],
    }).compile();

    controller = module.get<SchoolAbsenceController>(SchoolAbsenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
