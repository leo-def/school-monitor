import { ApiProperty } from '@nestjs/swagger';
import { SchoolClass } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolClassDto extends EntityDto implements SchoolClass {
  @ApiProperty({
    type: String,
  })
  @IsString()
  branchId: string;
}
