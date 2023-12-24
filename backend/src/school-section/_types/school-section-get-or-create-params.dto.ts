import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SchoolSectionGetOrCreateParamsDto {
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

  @ApiProperty({
    name: 'schoolSubjectId',
    type: String,
  })
  @IsString()
  schoolSubjectId: string;

  @ApiProperty({
    name: 'schoolClassId',
    type: String,
  })
  @IsString()
  schoolClassId: string;

  @ApiProperty({
    name: 'schoolTermId',
    type: String,
  })
  @IsString()
  schoolTermId: string;

  @ApiProperty({
    name: 'professorId',
    type: String,
  })
  @IsOptional()
  @IsString()
  professorId?: string;
}
