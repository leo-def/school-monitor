import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolEventDto } from './school-event.dto';

export class SchoolEventResponseDto extends ApiResponseDto<SchoolEventDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolEventDto,
  })
  @IsObject()
  data: SchoolEventDto;
}
