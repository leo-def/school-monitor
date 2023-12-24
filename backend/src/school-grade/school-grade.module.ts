import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SchoolGradeService } from './school-grade.service';
import { SchoolGradeController } from './school-grade.controller';

@Module({
  imports: [PrismaModule],
  providers: [SchoolGradeService],
  controllers: [SchoolGradeController],
})
export class SchoolGradeModule {}
