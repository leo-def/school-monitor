import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ConfirmAccountRequestDto {
  @ApiProperty({
    name: 'token',
    description: 'Reset password token',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  token: string;
}
