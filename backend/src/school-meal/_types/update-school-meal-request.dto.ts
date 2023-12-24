import { ApiProperty } from '@nestjs/swagger';
import { MealType, SchoolMeal, WeekDay } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateSchoolMealRequestDto
  implements Omit<SchoolMeal, EntityFields | 'desc'>
{
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({
    type: String,
    enum: MealType,
    enumName: 'MealTypeEnum',
  })
  @IsEnum(MealType)
  type: MealType;

  @ApiProperty({
    type: String,
    enum: WeekDay,
    enumName: 'WeekDayEnum',
  })
  @IsEnum(WeekDay)
  weekDays: WeekDay;

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSectionId: string;
}
