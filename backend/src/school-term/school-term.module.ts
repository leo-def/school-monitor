import { Module } from '@nestjs/common';
import { SchoolTermService } from './school-term.service';
import { SchoolTermController } from './school-term.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolTermService],
  controllers: [SchoolTermController],
})
export class SchoolTermModule {}
