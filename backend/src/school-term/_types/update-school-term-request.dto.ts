import { ApiProperty } from '@nestjs/swagger';
import { SchoolTerm } from '@prisma/client';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateSchoolTermRequestDto
  implements Omit<SchoolTerm, EntityFields | 'branchId' | 'companyId'>
{
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'branchId',
    type: String,
  })
  @IsOptional()
  @IsString()
  branchId?: string;

  @ApiProperty({
    name: 'start',
    type: Date,
  })
  @IsDate()
  start: Date;

  @ApiProperty({
    name: 'end',
    type: Date,
  })
  @IsDate()
  end: Date;
}
