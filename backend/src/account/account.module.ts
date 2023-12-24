import { Module } from '@nestjs/common';
import { AccountService } from './_services/account/account.service';
import { AccountController } from './account.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountTokenService } from './_services/account-token/account-token.service';
import { HashModule } from 'src/hash/hash.module';

@Module({
  imports: [PrismaModule, HashModule],
  exports: [AccountService, AccountTokenService],
  providers: [AccountService, AccountTokenService],
  controllers: [AccountController],
})
export class AccountModule {}
