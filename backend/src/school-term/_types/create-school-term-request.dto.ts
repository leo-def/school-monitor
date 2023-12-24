import { ApiProperty } from '@nestjs/swagger';
import { SchoolTerm } from '@prisma/client';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolTermRequestDto
  implements Omit<Partial<SchoolTerm>, EntityFields | 'branchId'>
{
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

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
