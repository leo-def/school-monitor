import { ApiProperty } from '@nestjs/swagger';
import { SchoolSubject } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';
export class CreateSchoolSubjectRequestDto
  implements Omit<SchoolSubject, EntityFields | 'desc' | 'branchId'>
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
  @IsString()
  desc?: string;

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
  @IsOptional()
  @IsString()
  branchId?: string;
}
