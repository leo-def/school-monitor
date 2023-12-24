import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpAuthDto {
  @ApiProperty({
    name: 'username',
    type: String,
    description: 'Account username',
    example: 'jhon1990',
  })
  @IsString()
  username: string;

  @ApiProperty({
    name: 'password',
    type: String,
    description: 'Account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  password: string;

  @ApiProperty({
    name: 'confirmPassword',
    type: String,
    description: 'Password confirmation',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  confirmPassword: string;
}
