import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolAppraisalDto } from './school-appraisal.dto';

export class SchoolAppraisalResponseDto extends ApiResponseDto<SchoolAppraisalDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolAppraisalDto,
  })
  @IsObject()
  data: SchoolAppraisalDto;
}
