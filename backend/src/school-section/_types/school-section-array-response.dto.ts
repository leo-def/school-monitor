import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolSectionDto } from './school-section.dto';

export class SchoolSectionArrayResponseDto extends ApiResponseDto<
  Array<SchoolSectionDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolSectionDto,
  })
  @IsObject()
  data: Array<SchoolSectionDto>;
}
