import { ApiProperty } from '@nestjs/swagger';
import { Account, SystemRole } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateAccountRequestDto
  implements
    Omit<Account, EntityFields | 'active' | 'source' | 'password' | 'username'>
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
    name: 'role',
    type: String,
    enum: SystemRole,
    enumName: 'SystemRoleEnum',
  })
  @IsEnum(SystemRole)
  role: SystemRole;

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
}
