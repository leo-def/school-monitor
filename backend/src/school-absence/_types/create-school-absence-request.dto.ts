import { ApiProperty } from '@nestjs/swagger';
import { SchoolAbsence } from '@prisma/client';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolAbsenceRequestDto
  implements Omit<SchoolAbsence, EntityFields | 'desc'>
{
  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSectionId: string;

  @ApiProperty({
    type: String,
  })
  @IsOptional()
  @IsString()
  desc?: string;

  @ApiProperty({
    type: Boolean,
  })
  @IsBoolean()
  hasJustification: boolean;

  @ApiProperty({
    type: String,
  })
  @IsString()
  justification: string;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  start: Date;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  end: Date;
}
