import { ApiProperty } from '@nestjs/swagger';
import { SchoolEvent } from '@prisma/client';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolEventDto extends EntityDto implements SchoolEvent {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  desc: string;

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
