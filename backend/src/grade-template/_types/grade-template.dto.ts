import { ApiProperty } from '@nestjs/swagger';
import { GradeTemplate } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class GradeTemplateDto extends EntityDto implements GradeTemplate {
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'max',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  max: number;

  @ApiProperty({
    name: 'min',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  min: number;

  @ApiProperty({
    name: 'passingScore',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  passingScore: number;

  @ApiProperty({
    name: 'companyId',
    type: String,
  })
  @IsString()
  companyId: string;

  @ApiProperty({
    name: 'branchId',
    type: String,
  })
  @IsString()
  branchId: string;
}
