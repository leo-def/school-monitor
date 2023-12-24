import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { ForgotPasswordDto } from './forgot-password.dto';

export abstract class ForgotPasswordResponseDto extends ApiResponseDto<ForgotPasswordDto> {
  @ApiProperty({
    name: 'data',
    type: ForgotPasswordDto,
  })
  @IsObject()
  data: ForgotPasswordDto;
}
