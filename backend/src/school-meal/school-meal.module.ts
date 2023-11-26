import { Module } from '@nestjs/common';
import { SchoolMealController } from './school-meal.controller';
import { SchoolMealService } from './school-meal.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SchoolMealController],
  providers: [SchoolMealService],
})
export class SchoolMealModule {}
