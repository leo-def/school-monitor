import { Test, TestingModule } from '@nestjs/testing';
import { SchoolNotificationService } from './school-notification.service';

describe('SchoolNotificationService', () => {
  let service: SchoolNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolNotificationService],
    }).compile();

    service = module.get<SchoolNotificationService>(SchoolNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
