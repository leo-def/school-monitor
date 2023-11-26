import { Module } from '@nestjs/common';
import { SchoolAbsenceService } from './school-absence.service';
import { SchoolAbsenceController } from './school-absence.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolAbsenceService],
  controllers: [SchoolAbsenceController],
})
export class SchoolAbsenceModule {}
