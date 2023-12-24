import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class ChangePasswordRequestDto {
  @ApiProperty({
    name: 'oldPassword',
    description: 'Old account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  oldPassword: string;

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
