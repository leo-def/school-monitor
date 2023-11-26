import { Module } from '@nestjs/common';
import { SchoolSectionService } from './school-section.service';
import { SchoolSectionController } from './school-section.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [SchoolSectionService],
  controllers: [SchoolSectionController],
})
export class SchoolSectionModule {}
