import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpAccountTypeDto {
  @ApiProperty({
    description: 'Is a group account',
    example: 'true',
  })
  @IsString()
  isGroup: string;
}
