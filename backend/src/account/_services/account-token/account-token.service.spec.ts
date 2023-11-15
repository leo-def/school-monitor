import { Test, TestingModule } from '@nestjs/testing';
import { AccountTokenService } from './account-token.service';

describe('AccountTokenService', () => {
  let service: AccountTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountTokenService],
    }).compile();

    service = module.get<AccountTokenService>(AccountTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
