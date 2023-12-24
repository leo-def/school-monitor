import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolAbsenceDto } from './school-absence.dto';

export class SchoolAbsenceArrayResponseDto extends ApiResponseDto<
  Array<SchoolAbsenceDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolAbsenceDto,
  })
  @IsObject()
  data: Array<SchoolAbsenceDto>;
}
