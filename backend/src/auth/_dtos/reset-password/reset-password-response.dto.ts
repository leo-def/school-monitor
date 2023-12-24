import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { ResetPasswordDto } from './reset-password.dto';

export abstract class ResetPasswordResponseDto extends ApiResponseDto<ResetPasswordDto> {
  @ApiProperty({
    name: 'data',
    type: ResetPasswordDto,
  })
  @IsObject()
  data: ResetPasswordDto;
}
