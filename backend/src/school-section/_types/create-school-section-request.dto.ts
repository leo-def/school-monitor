import { ApiProperty } from '@nestjs/swagger';
import { SchoolSection } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolSectionRequestDto
  implements Omit<SchoolSection, EntityFields | 'branchId'>
{
  @ApiProperty({
    name: 'companyId',
    type: String,
  })
  @IsOptional()
  @IsString()
  companyId: string;

  @ApiProperty({
    name: 'branchId',
    type: String,
  })
  @IsOptional()
  @IsOptional()
  @IsString()
  branchId?: string;

  @ApiProperty({
    name: 'schoolSubjectId',
    type: String,
  })
  @IsOptional()
  @IsString()
  schoolSubjectId: string;

  @ApiProperty({
    name: 'schoolClassId',
    type: String,
  })
  @IsOptional()
  @IsString()
  schoolClassId: string;

  @ApiProperty({
    name: 'schoolTermId',
    type: String,
  })
  @IsOptional()
  @IsString()
  schoolTermId: string;

  @ApiProperty({
    name: 'professorId',
    type: String,
  })
  @IsOptional()
  @IsString()
  professorId: string;
}
