import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateCustomerAccountRequestDto
  implements
    Omit<Account, EntityFields | 'active' | 'source' | 'username' | 'role'>
{
  @ApiProperty({
    name: 'imgId',
    type: String,
  })
  @IsString()
  imgId: string;

  @ApiProperty({
    name: 'username',
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    name: 'phone',
    type: String,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    name: 'email',
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    name: 'name',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'referenceToken',
    type: String,
  })
  @IsString()
  referenceToken: string;

  @ApiProperty({
    name: 'referenceId',
    type: String,
  })
  @IsString()
  referenceId: string;

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
