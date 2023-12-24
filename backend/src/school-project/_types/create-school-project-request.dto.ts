import { ApiProperty } from '@nestjs/swagger';
import { SchoolProject, SchoolProjectStatus } from '@prisma/client';
import { IsDate, IsEnum, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolProjectRequestDto
  implements Omit<SchoolProject, EntityFields | 'desc'>
{
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'desc',
    type: String,
  })
  @IsString()
  desc?: string;

  @ApiProperty({
    name: 'status',
    type: String,
    enum: SchoolProjectStatus,
    enumName: 'SchoolProjectStatusEnum',
  })
  @IsEnum(SchoolProjectStatus)
  status: SchoolProjectStatus;

  @ApiProperty({
    name: 'date',
    type: Date,
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    name: 'deadline',
    type: Date,
  })
  @IsDate()
  deadline: Date;

  @ApiProperty({
    name: 'deliveryDate',
    type: Date,
  })
  @IsDate()
  deliveryDate: Date;

  @ApiProperty({
    name: 'schoolSectionId',
    type: String,
  })
  @IsString()
  schoolSectionId: string;

  @ApiProperty({
    name: 'schoolGradeId',
    type: String,
  })
  @IsString()
  schoolGradeId: string;
}
