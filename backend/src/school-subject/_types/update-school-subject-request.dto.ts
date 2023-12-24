import { ApiProperty } from '@nestjs/swagger';
import { SchoolSubject } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateSchoolSubjectRequestDto
  implements
    Omit<SchoolSubject, EntityFields | 'desc' | 'branchId' | 'companyId'>
{
  @ApiProperty({
    name: 'title',
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
    name: 'branchId',
    type: String,
  })
  @IsOptional()
  @IsString()
  branchId?: string;
}
