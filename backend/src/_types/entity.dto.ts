import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class EntityDto {
  @ApiProperty({
    name: 'id',
    type: String,
  })
  @IsString()
  id: string;

  @ApiProperty({
    name: 'createdAt',
    type: Date,
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    name: 'createdBy',
    type: String,
  })
  @IsString()
  createdBy: string;

  @ApiProperty({
    name: 'updatedAt',
    type: Date,
  })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({
    name: 'updatedBy',
    type: String,
  })
  @IsString()
  updatedBy: string;
}
