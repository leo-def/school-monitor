import { ApiProperty } from '@nestjs/swagger';
import { SchoolGrade } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolGradeDto extends EntityDto implements SchoolGrade {
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
    name: 'value',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  value: number;

  @ApiProperty({
    name: 'templateId',
    type: String,
  })
  @IsOptional()
  @IsString()
  templateId: string;

  @ApiProperty({
    name: 'appraiserId',
    type: String,
  })
  @IsOptional()
  @IsString()
  appraiserId: string;

  @ApiProperty({
    name: 'assessedId',
    type: String,
  })
  @IsOptional()
  @IsString()
  assessedId: string;
}
