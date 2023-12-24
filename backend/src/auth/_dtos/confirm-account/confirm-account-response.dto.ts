import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { ConfirmAccountDto } from './confirm-account.dto';

export abstract class ConfirmAccountResponseDto extends ApiResponseDto<ConfirmAccountDto> {
  @ApiProperty({
    name: 'data',
    type: ConfirmAccountDto,
  })
  @IsObject()
  data: ConfirmAccountDto;
}
