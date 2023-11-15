import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TransactionService } from './_services/transaction/transaction.service';

@Module({
  providers: [PrismaService, TransactionService],
  exports: [PrismaService],
})
export class PrismaModule {}
