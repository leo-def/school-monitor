import { ApiProperty } from '@nestjs/swagger';
import { SchoolProject, SchoolProjectStatus } from '@prisma/client';
import { IsString, IsEnum, IsDate } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolProjectDto extends EntityDto implements SchoolProject {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  desc: string;

  @ApiProperty({
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
    type: Date,
  })
  @IsDate()
  deadline: Date;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  deliveryDate: Date;

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSectionId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  gradeId: string;
}
