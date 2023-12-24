import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { CompanyDto } from './company.dto';

export class CompanyResponseDto extends ApiResponseDto<CompanyDto> {
  @ApiProperty({
    name: 'data',
    type: CompanyDto,
  })
  @IsObject()
  data: CompanyDto;
}
