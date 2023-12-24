import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { GradeTemplateDto } from './grade-template.dto';

export class GradeTemplateResponseDto extends ApiResponseDto<GradeTemplateDto> {
  @ApiProperty({
    name: 'data',
    type: GradeTemplateDto,
  })
  @IsObject()
  data: GradeTemplateDto;
}
