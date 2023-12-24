import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export abstract class ForgotPasswordDto {
  @ApiProperty({
    name: 'created',
    description: 'Reset password token created',
    example: true,
  })
  @IsBoolean()
  created: boolean;
}
