import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GradeTemplateService } from './grade-template.service';
import { GradeTemplateController } from './grade-template.controller';

@Module({
  imports: [PrismaModule],
  providers: [GradeTemplateService],
  controllers: [GradeTemplateController],
})
export class GradeTemplateModule {}
