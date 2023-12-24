import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { SignUpAccountTypeDto } from './sign-up-account-type.dto';
import { SignUpAuthDto } from './sign-up-auth.dto';
import { SignUpProfileDto } from './sign-up-profile.dto';
import { SignUpReferenceDto } from './sign-up-reference.dto';

export abstract class SignUpRequestDto {
  @ApiProperty({
    name: 'accountType',
    type: SignUpAccountTypeDto,
    description: 'Account type data',
  })
  @IsObject()
  accountType: SignUpAccountTypeDto;

  @ApiProperty({
    name: 'profile',
    type: SignUpProfileDto,
    description: 'Profile data',
  })
  @IsObject()
  profile: SignUpProfileDto;

  @ApiProperty({
    name: 'auth',
    type: SignUpAuthDto,
    description: 'Authentication data',
  })
  @IsObject()
  auth: SignUpAuthDto;

  @ApiProperty({
    name: 'reference',
    type: SignUpReferenceDto,
    description: 'Reference data',
  })
  @IsObject()
  reference: SignUpReferenceDto;
}
