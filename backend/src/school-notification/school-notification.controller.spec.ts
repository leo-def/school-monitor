import { Test, TestingModule } from '@nestjs/testing';
import { SchoolNotificationController } from './school-notification.controller';

describe('SchoolNotificationController', () => {
  let controller: SchoolNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolNotificationController],
    }).compile();

    controller = module.get<SchoolNotificationController>(SchoolNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
