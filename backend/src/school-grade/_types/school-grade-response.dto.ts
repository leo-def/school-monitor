import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolGradeDto } from './school-grade.dto';

export class SchoolGradeResponseDto extends ApiResponseDto<SchoolGradeDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolGradeDto,
  })
  @IsObject()
  data: SchoolGradeDto;
}
