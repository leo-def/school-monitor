import { ApiProperty } from '@nestjs/swagger';
import { SchoolTerm } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolTermDto extends EntityDto implements SchoolTerm {
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
  @IsString()
  branchId: string;

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
