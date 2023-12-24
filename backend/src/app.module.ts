import { Module } from '@nestjs/common';
import { AppInitService } from './_services/app-init/app-init.service';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BranchModule } from './branch/branch.module';
import { CollaboratorModule } from './collaborator/collaborator.module';
import { CompanyModule } from './company/company.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolAbsenceModule } from './school-absence/school-absence.module';
import { SchoolAppraisalModule } from './school-appraisal/school-appraisal.module';
import { SchoolClassModule } from './school-class/school-class.module';
import { SchoolEventModule } from './school-event/school-event.module';
import { SchoolMealModule } from './school-meal/school-meal.module';
import { SchoolNotificationModule } from './school-notification/school-notification.module';
import { SchoolProjectModule } from './school-project/school-project.module';
import { SchoolSectionModule } from './school-section/school-section.module';
import { SchoolSubjectModule } from './school-subject/school-subject.module';
import { SchoolTermModule } from './school-term/school-term.module';
import { HashModule } from './hash/hash.module';
import { SchoolGradeModule } from './school-grade/school-grade.module';
import { GradeTemplateModule } from './grade-template/grade-template.module';

@Module({
  imports: [
    PrismaModule,
    AccountModule,
    AuthModule,
    BranchModule,
    CollaboratorModule,
    CompanyModule,
    NotificationModule,
    SchoolAbsenceModule,
    SchoolAppraisalModule,
    SchoolClassModule,
    SchoolEventModule,
    SchoolMealModule,
    SchoolNotificationModule,
    SchoolProjectModule,
    SchoolSectionModule,
    SchoolSubjectModule,
    SchoolTermModule,
    HashModule,
    SchoolGradeModule,
    GradeTemplateModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppInitService],
})
export class AppModule {}
