import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolTermDto } from './school-term.dto';

export class SchoolTermResponseDto extends ApiResponseDto<SchoolTermDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolTermDto,
  })
  @IsObject()
  data: SchoolTermDto;
}
