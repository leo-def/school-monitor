import { ApiProperty } from '@nestjs/swagger';
import { SchoolProject, SchoolProjectStatus } from '@prisma/client';
import { IsString, IsEnum, IsDate, IsOptional } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolProjectDto extends EntityDto implements SchoolProject {
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
  @IsOptional()
  @IsString()
  desc: string;

  @ApiProperty({
    name: 'status',
    type: String,
    enum: SchoolProjectStatus,
    enumName: 'SchoolProjectStatusEnum',
  })
  @IsEnum(SchoolProjectStatus)
  status: SchoolProjectStatus;

  @ApiProperty({
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
