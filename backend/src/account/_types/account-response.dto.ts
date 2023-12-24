import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { AccountDto } from './account.dto';

export class AccountResponseDto extends ApiResponseDto<AccountDto> {
  @ApiProperty({
    name: 'data',
    type: AccountDto,
  })
  @IsObject()
  data: AccountDto;
}
