import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ForgotPasswordParamTypeEnum } from '../../_enums/forgot-password-param-type.enum';

export class ForgotPasswordDto {
  @ApiProperty({
    description: 'Account phone',
    example: '+1019875789',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Account email',
    example: 'jhon@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Account email',
    example: 'jhon@email.com',
    enum: ForgotPasswordParamTypeEnum,
  })
  @IsString()
  @IsEnum(ForgotPasswordParamTypeEnum)
  paramType: ForgotPasswordParamTypeEnum;
}
