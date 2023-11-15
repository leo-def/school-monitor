import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export abstract class ConfirmAccountResponseDto {
  @ApiProperty({
    description: 'Account updated',
    example: true,
  })
  @IsBoolean()
  updated: boolean;
}
