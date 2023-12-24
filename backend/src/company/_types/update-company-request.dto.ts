import { ApiProperty } from '@nestjs/swagger';
import { Company } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateCompanyRequestDto implements Omit<Company, EntityFields> {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;
}
