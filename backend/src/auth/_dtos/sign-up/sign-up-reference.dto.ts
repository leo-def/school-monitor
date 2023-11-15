import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpReferenceDto {
  @ApiProperty({
    description: 'Reference token',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  token?: string;

  @ApiProperty({
    description: 'Reference account id',
    example: '3475cdbf-aaa3-4ed7-915e-373f1423afe4',
  })
  @IsString()
  id?: string;
}
