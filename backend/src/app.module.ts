import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppInitService } from './_services/app-init/app-init.service';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { SchoolSubjectModule } from './school-subject/school-subject.module';
import { SchoolClassModule } from './school-class/school-class.module';
import { SchoolTermModule } from './school-term/school-term.module';
import { SchoolMealModule } from './school-meal/school-meal.module';
import { SchoolEventModule } from './school-event/school-event.module';
import { SchoolNotificationModule } from './school-notification/school-notification.module';
import { SchoolAppraisalModule } from './school-appraisal/school-appraisal.module';
import { SchoolProjectModule } from './school-project/school-project.module';
import { SchoolAbsenceModule } from './school-absence/school-absence.module';

@Module({
  imports: [
    AccountModule,
    AuthModule,
    NotificationModule,
    PrismaModule,
    CollaboratorModule,
    SchoolSubjectModule,
    SchoolClassModule,
    SchoolTermModule,
    SchoolMealModule,
    SchoolEventModule,
    SchoolNotificationModule,
    SchoolAppraisalModule,
    SchoolProjectModule,
    SchoolAbsenceModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppInitService],
})
export class AppModule {}
