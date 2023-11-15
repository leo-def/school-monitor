import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export abstract class ForgotPasswordResponseDto {
  @ApiProperty({
    description: 'Reset password token created',
    example: true,
  })
  @IsBoolean()
  created: boolean;
}
