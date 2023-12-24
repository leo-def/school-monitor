import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolSectionDto } from './school-section.dto';

export class SchoolSectionResponseDto extends ApiResponseDto<SchoolSectionDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolSectionDto,
  })
  @IsObject()
  data: SchoolSectionDto;
}
