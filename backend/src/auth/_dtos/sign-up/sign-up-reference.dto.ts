import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export abstract class SignUpReferenceDto {
  @ApiProperty({
    name: 'token',
    type: String,
    description: 'Reference token',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsOptional()
  @IsString()
  token?: string;

  @ApiProperty({
    name: 'id',
    type: String,
    description: 'Reference account id',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsOptional()
  @IsString()
  id?: string;
}
