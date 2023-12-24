import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolEventDto } from './school-event.dto';

export class SchoolEventArrayResponseDto extends ApiResponseDto<
  Array<SchoolEventDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolEventDto,
  })
  @IsObject()
  data: Array<SchoolEventDto>;
}
