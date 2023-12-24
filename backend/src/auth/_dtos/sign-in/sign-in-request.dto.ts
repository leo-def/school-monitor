import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignInRequestDto {
  @ApiProperty({
    name: 'username',
    description: 'Account username',
    example: 'admin',
  })
  @IsString()
  username: string;

  @ApiProperty({
    name: 'password',
    description: 'Account password',
    example: 'admin@123#!',
  })
  @IsString()
  password: string;
}
