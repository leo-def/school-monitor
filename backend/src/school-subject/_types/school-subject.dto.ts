import { ApiProperty } from '@nestjs/swagger';
import { SchoolSubject } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolSubjectDto extends EntityDto implements SchoolSubject {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  branchId: string;
}
