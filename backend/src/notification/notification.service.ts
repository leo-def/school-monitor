import { Injectable } from '@nestjs/common';
import {
  Notification,
  NotificationStatus,
  NotificationType,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationParams } from './_types/notification-params';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async notify<T extends NotificationParams>(
    accountId: string,
    type: NotificationType,
    params?: T,
  ): Promise<Notification> {
    const strParams = JSON.stringify(params);
    return await this.prisma.notification.create({
      data: {
        accountId,
        type,
        params: strParams,
        status: NotificationStatus.CREATED,
      },
    });
  }
}
