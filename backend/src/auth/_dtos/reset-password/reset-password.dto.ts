import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export abstract class ResetPasswordDto {
  @ApiProperty({
    name: 'updated',
    description: 'Account updated',
    example: true,
  })
  @IsBoolean()
  updated: boolean;
}
