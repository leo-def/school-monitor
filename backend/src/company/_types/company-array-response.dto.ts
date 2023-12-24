import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { CompanyDto } from './company.dto';

export class CompanyArrayResponseDto extends ApiResponseDto<Array<CompanyDto>> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: CompanyDto,
  })
  @IsObject()
  data: Array<CompanyDto>;
}
