import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { SignUpAccountTypeDto } from './sign-up-account-type.dto';
import { SignUpAuthDto } from './sign-up-auth.dto';
import { SignUpProfileDto } from './sign-up-profile.dto';
import { SignUpReferenceDto } from './sign-up-reference.dto';

export abstract class SignUpDto {
  @ApiProperty({
    description: 'Account type data',
  })
  @IsObject()
  accountType: SignUpAccountTypeDto;

  @ApiProperty({
    description: 'Profile data',
  })
  @IsObject()
  profile: SignUpProfileDto;

  @ApiProperty({
    description: 'Authentication data',
  })
  @IsObject()
  auth: SignUpAuthDto;

  @ApiProperty({
    description: 'Reference data',
  })
  @IsObject()
  reference: SignUpReferenceDto;
}
