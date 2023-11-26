import { Module } from '@nestjs/common';
import { SchoolSubjectController } from './school-subject.controller';
import { SchoolSubjectService } from './school-subject.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SchoolSubjectController],
  providers: [SchoolSubjectService],
})
export class SchoolSubjectModule {}
