import { ApiProperty } from '@nestjs/swagger';
import { SchoolAppraisal } from '@prisma/client';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolAppraisalDto extends EntityDto implements SchoolAppraisal {
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    name: 'desc',
  })
  @IsOptional()
  @IsString()
  desc: string;

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
