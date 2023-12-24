import { ApiProperty } from '@nestjs/swagger';
import { SchoolEvent } from '@prisma/client';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateSchoolEventRequestDto
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
