import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolAppraisalDto } from './school-appraisal.dto';

export class SchoolAppraisalArrayResponseDto extends ApiResponseDto<
  Array<SchoolAppraisalDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolAppraisalDto,
  })
  @IsObject()
  data: Array<SchoolAppraisalDto>;
}
