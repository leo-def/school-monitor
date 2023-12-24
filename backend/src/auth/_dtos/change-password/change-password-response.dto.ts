import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { ChangePasswordDto } from './change-password.dto';

export abstract class ChangePasswordResponseDto extends ApiResponseDto<ChangePasswordDto> {
  @ApiProperty({
    name: 'data',
    type: ChangePasswordDto,
  })
  @IsObject()
  data: ChangePasswordDto;
}
