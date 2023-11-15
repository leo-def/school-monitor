import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export abstract class SignUpResponseDto {
  @ApiProperty({
    description: 'Account id',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  id?: string;

  @ApiProperty({
    description: 'Account created',
    example: true,
  })
  @IsBoolean()
  created: boolean;
}
