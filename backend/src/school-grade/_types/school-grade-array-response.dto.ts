import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolGradeDto } from './school-grade.dto';

export class SchoolGradeArrayResponseDto extends ApiResponseDto<
  Array<SchoolGradeDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolGradeDto,
  })
  @IsObject()
  data: Array<SchoolGradeDto>;
}
