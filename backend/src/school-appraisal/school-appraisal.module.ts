import { Module } from '@nestjs/common';
import { SchoolAppraisalService } from './school-appraisal.service';
import { SchoolAppraisalController } from './school-appraisal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolAppraisalService],
  controllers: [SchoolAppraisalController],
})
export class SchoolAppraisalModule {}
