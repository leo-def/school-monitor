import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class EntityDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  id: string;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  createdAt: Date;

  @ApiProperty({
    type: String,
  })
  @IsString()
  createdBy: string;

  @ApiProperty({
    type: Date,
  })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({
    type: String,
  })
  @IsString()
  updatedBy: string;
}
