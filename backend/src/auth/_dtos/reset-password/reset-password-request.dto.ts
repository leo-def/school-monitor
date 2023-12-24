import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResetPasswordRequestDto {
  @ApiProperty({
    name: 'token',
    description: 'Reset password token',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  token: string;

  @ApiProperty({
    name: 'password',
    description: 'New account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  password: string;

  @ApiProperty({
    name: 'confirmPassword',
    description: 'New password confirmation',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  confirmPassword: string;
}
