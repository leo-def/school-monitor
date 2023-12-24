import { ApiProperty } from '@nestjs/swagger';
import { SchoolClass } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolClassDto extends EntityDto implements SchoolClass {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'desc',
    type: String,
  })
  @IsOptional()
  @IsString()
  desc: string;

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
  @IsOptional()
  @IsString()
  branchId: string;
}
