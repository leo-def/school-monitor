import { ApiProperty } from '@nestjs/swagger';
import { Company } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class CompanyDto extends EntityDto implements Company {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;
}
