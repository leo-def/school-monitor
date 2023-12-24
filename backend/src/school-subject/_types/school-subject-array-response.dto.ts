import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolSubjectDto } from './school-subject.dto';

export class SchoolSubjectArrayResponseDto extends ApiResponseDto<
  Array<SchoolSubjectDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolSubjectDto,
  })
  @IsObject()
  data: Array<SchoolSubjectDto>;
}
