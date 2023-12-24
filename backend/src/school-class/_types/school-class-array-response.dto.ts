import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolClassDto } from './school-class.dto';

export class SchoolClassArrayResponseDto extends ApiResponseDto<
  Array<SchoolClassDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolClassDto,
  })
  @IsObject()
  data: Array<SchoolClassDto>;
}
