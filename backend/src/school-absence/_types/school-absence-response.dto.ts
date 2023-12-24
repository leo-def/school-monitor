import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolAbsenceDto } from './school-absence.dto';

export class SchoolAbsenceResponseDto extends ApiResponseDto<SchoolAbsenceDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolAbsenceDto,
  })
  @IsObject()
  data: SchoolAbsenceDto;
}
