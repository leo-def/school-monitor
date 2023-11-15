import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignInResponseDto {
  @ApiProperty({
    description: 'Authentication token',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  token: string;
}
