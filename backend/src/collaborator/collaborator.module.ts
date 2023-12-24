import { Module } from '@nestjs/common';
import { CollaboratorService } from './collaborator.service';
import { CollaboratorController } from './collaborator.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [PrismaModule, AccountModule],
  providers: [CollaboratorService],
  controllers: [CollaboratorController],
})
export class CollaboratorModule {}
