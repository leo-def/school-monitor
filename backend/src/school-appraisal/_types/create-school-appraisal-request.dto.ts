import { ApiProperty } from '@nestjs/swagger';
import { SchoolAppraisal } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolAppraisalRequestDto
  implements Omit<SchoolAppraisal, EntityFields | 'desc'>
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
    name: 'date',
    type: Date,
  })
  @IsDate()
  date: Date;

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
