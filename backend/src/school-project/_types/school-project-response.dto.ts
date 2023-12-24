import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolProjectDto } from './school-project.dto';

export class SchoolProjectResponseDto extends ApiResponseDto<SchoolProjectDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolProjectDto,
  })
  @IsObject()
  data: SchoolProjectDto;
}
