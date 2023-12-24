import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolTermDto } from './school-term.dto';

export class SchoolTermArrayResponseDto extends ApiResponseDto<
  Array<SchoolTermDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolTermDto,
  })
  @IsObject()
  data: Array<SchoolTermDto>;
}
