import { ApiProperty } from '@nestjs/swagger';
import { Account, Source, SystemRole } from '@prisma/client';
import { IsBoolean, IsString, IsEnum } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class AccountDto extends EntityDto implements Omit<Account, 'password'> {
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
    name: 'source',
    type: String,
    enum: Source,
    enumName: 'SourceEnum',
  })
  @IsEnum(Source)
  source: Source;

  @ApiProperty({
    name: 'active',
    type: Boolean,
  })
  @IsBoolean()
  active: boolean;

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
