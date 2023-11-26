import { ApiProperty } from '@nestjs/swagger';
import { SchoolAppraisal } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolAppraisalDto extends EntityDto implements SchoolAppraisal {
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
  gradeId: string;
}
