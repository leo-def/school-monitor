import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SignInDto } from './sign-in.dto';

export class SignInResponseDto extends ApiResponseDto<SignInDto> {
  @ApiProperty({
    name: 'data',
    type: SignInDto,
  })
  @IsObject()
  data: SignInDto;
}
