import { Module } from '@nestjs/common';
import { SchoolMealModule } from './school-meal/school-meal.module';
import { SchoolEventModule } from './school-event/school-event.module';
import { SchoolNotificationModule } from './school-notification/school-notification.module';

@Module({
  imports: [SchoolMealModule, SchoolEventModule, SchoolNotificationModule],
})
export class SchoolSectionModule {}
