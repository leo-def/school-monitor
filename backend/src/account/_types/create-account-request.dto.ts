import { ApiProperty } from '@nestjs/swagger';
import { Account, SystemRole } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class CreateAccountRequestDto
  implements Omit<Account, EntityFields | 'active' | 'source'>
{
  @ApiProperty({
    name: 'imgId',
    type: String,
    example: '',
  })
  @IsString()
  imgId: string;

  @ApiProperty({
    name: 'username',
    type: String,
    example: 'username',
  })
  @IsString()
  username: string;

  @ApiProperty({
    name: 'phone',
    type: String,
    example: '+554199998888',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    name: 'email',
    example: 'email@email.com',
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    name: 'name',
    example: 'Jhon Dhou',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'password',
    example: 'password@123',
    type: String,
  })
  @IsString()
  password: string;

  @ApiProperty({
    name: 'confirmPassword',
    example: 'password@123',
    type: String,
  })
  @IsString()
  confirmPassword: string;

  @ApiProperty({
    name: 'role',
    type: String,
    enum: SystemRole,
    enumName: 'SystemRoleEnum',
    example: 'CUSTOMER',
  })
  @IsEnum(SystemRole)
  role: SystemRole;

  @ApiProperty({
    name: 'referenceToken',
    type: String,
    example: '122323.osheoifesee.398743.2334',
  })
  @IsString()
  referenceToken: string;

  @ApiProperty({
    name: 'referenceId',
    type: String,
  })
  @IsString()
  referenceId: string;
}
