import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [NotificationService],
  exports: [NotificationService],
  imports: [PrismaModule],
})
export class NotificationModule {}
