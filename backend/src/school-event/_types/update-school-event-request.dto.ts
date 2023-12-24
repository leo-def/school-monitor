import { ApiProperty } from '@nestjs/swagger';
import { SchoolEvent } from '@prisma/client';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateSchoolEventRequestDto
  implements Omit<SchoolEvent, EntityFields | 'desc'>
{
  @ApiProperty({
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
    type: Boolean,
  })
  @IsBoolean()
  recess: boolean;

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

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSectionId: string;
}
