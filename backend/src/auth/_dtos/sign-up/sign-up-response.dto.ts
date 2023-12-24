import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SignUpDto } from './sign-up.dto';

export class SignUpResponseDto extends ApiResponseDto<SignUpDto> {
  @ApiProperty({
    name: 'data',
    type: SignUpDto,
  })
  @IsObject()
  data: SignUpDto;
}
