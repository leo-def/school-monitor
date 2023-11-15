import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export abstract class ChangePasswordResponseDto {
  @ApiProperty({
    description: 'Account updated',
    example: true,
  })
  @IsBoolean()
  updated: boolean;
}
