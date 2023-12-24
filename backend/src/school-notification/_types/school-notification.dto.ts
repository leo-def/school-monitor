import { ApiProperty } from '@nestjs/swagger';
import { SchoolNotification } from '@prisma/client';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolNotificationDto
  extends EntityDto
  implements SchoolNotification
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
  desc: string;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  date: Date;

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSectionId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  receiverId: string;
}
