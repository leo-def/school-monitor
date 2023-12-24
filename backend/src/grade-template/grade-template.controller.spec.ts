import { Test, TestingModule } from '@nestjs/testing';
import { GradeTemplateController } from './grade-template.controller';

describe('GradeTemplateController', () => {
  let controller: GradeTemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradeTemplateController],
    }).compile();

    controller = module.get<GradeTemplateController>(GradeTemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
