import { ApiProperty } from '@nestjs/swagger';
import { Account, Source, SystemRole } from '@prisma/client';
import { IsBoolean, IsString, IsEnum } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class AccountDto extends EntityDto implements Account {
  @ApiProperty({
    type: String,
  })
  @IsString()
  imgId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    enum: SystemRole,
    enumName: 'SystemRoleEnum',
  })
  @IsEnum(SystemRole)
  role: SystemRole;

  @ApiProperty({
    type: String,
    enum: Source,
    enumName: 'SourceEnum',
  })
  @IsEnum(Source)
  source: Source;

  @ApiProperty({
    type: Boolean,
  })
  @IsBoolean()
  active: boolean;

  @ApiProperty({
    type: String,
  })
  @IsString()
  referenceToken: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  referenceId: string;
}
