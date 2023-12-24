import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ForgotPasswordParamTypeEnum } from '../../_enums/forgot-password-param-type.enum';

export class ForgotPasswordRequestDto {
  @ApiProperty({
    name: 'phone',
    description: 'Account phone',
    example: '+1019875789',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    name: 'email',
    description: 'Account email',
    example: 'jhon@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    name: 'paramType',
    description: 'Account email',
    example: 'jhon@email.com',
    enum: ForgotPasswordParamTypeEnum,
  })
  @IsString()
  @IsEnum(ForgotPasswordParamTypeEnum)
  paramType: ForgotPasswordParamTypeEnum;
}
