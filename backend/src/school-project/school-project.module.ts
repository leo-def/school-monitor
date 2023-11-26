import { Module } from '@nestjs/common';
import { SchoolProjectService } from './school-project.service';
import { SchoolProjectController } from './school-project.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolProjectService],
  controllers: [SchoolProjectController],
})
export class SchoolProjectModule {}
