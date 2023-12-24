import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { GradeTemplateDto } from './grade-template.dto';

export class GradeTemplateArrayResponseDto extends ApiResponseDto<
  Array<GradeTemplateDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: GradeTemplateDto,
  })
  @IsObject()
  data: Array<GradeTemplateDto>;
}
