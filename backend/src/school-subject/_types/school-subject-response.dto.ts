import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolSubjectDto } from './school-subject.dto';

export class SchoolSubjectResponseDto extends ApiResponseDto<SchoolSubjectDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolSubjectDto,
  })
  @IsObject()
  data: SchoolSubjectDto;
}
