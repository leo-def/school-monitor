import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolProjectDto } from './school-project.dto';

export class SchoolProjectArrayResponseDto extends ApiResponseDto<
  Array<SchoolProjectDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolProjectDto,
  })
  @IsObject()
  data: Array<SchoolProjectDto>;
}
