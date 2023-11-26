import { Module } from '@nestjs/common';
import { SchoolEventService } from './school-event.service';
import { SchoolEventController } from './school-event.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolEventService],
  controllers: [SchoolEventController],
})
export class SchoolEventModule {}
