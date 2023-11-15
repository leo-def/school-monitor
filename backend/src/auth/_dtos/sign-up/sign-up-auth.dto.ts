import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpAuthDto {
  @ApiProperty({
    description: 'Account username',
    example: 'jhon1990',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Account password',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Password confirmation',
    example: 'Pas@#1Adf3',
  })
  @IsString()
  confirmPassword: string;
}
