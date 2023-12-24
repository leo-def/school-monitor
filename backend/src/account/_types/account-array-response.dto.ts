import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { AccountDto } from './account.dto';

export class AccountArrayResponseDto extends ApiResponseDto<Array<AccountDto>> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: AccountDto,
  })
  @IsObject()
  data: Array<AccountDto>;
}
