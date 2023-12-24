import { ApiProperty } from '@nestjs/swagger';
import { SchoolClass } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateSchoolClassRequestDto
  implements Omit<SchoolClass, EntityFields | 'desc' | 'branchId'>
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
  @IsOptional()
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
