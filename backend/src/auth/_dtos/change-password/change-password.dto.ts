import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class ChangePasswordDto {
  @ApiProperty({
    description: 'Old account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  oldPassword: string;

  @ApiProperty({
    description: 'New account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'New password confirmation',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  confirmPassword: string;
}
