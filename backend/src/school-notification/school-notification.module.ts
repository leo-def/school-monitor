import { Module } from '@nestjs/common';
import { SchoolNotificationService } from './school-notification.service';
import { SchoolNotificationController } from './school-notification.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SchoolNotificationService],
  controllers: [SchoolNotificationController],
})
export class SchoolNotificationModule {}
