import { ApiProperty } from '@nestjs/swagger';
import { Branch } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateBranchRequestDto implements Omit<Branch, EntityFields> {
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
}
