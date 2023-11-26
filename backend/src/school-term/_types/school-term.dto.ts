import { ApiProperty } from '@nestjs/swagger';
import { SchoolTerm } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolTermDto extends EntityDto implements SchoolTerm {
  @ApiProperty({
    type: String,
  })
  @IsString()
  branchId: string;
}
