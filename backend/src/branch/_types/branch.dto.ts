import { ApiProperty } from '@nestjs/swagger';
import { Branch } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class BranchDto extends EntityDto implements Branch {
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
