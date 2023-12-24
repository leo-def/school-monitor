import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export abstract class SignUpDto {
  @ApiProperty({
    name: 'id',
    type: String,
    description: 'Account id',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({
    name: 'created',
    type: Boolean,
    description: 'Account created',
    example: true,
  })
  @IsBoolean()
  created: boolean;
}
