import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@prisma/client';
import { IsString } from 'class-validator';

export class UpdatePasswordRequestDto implements Pick<Account, 'password'> {
  @ApiProperty({
    name: 'password',
    type: String,
  })
  @IsString()
  password: string;

  @ApiProperty({
    name: 'confirmPassword',
    type: String,
  })
  @IsString()
  confirmPassword: string;
}
