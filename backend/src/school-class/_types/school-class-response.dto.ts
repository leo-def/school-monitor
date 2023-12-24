import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolClassDto } from './school-class.dto';

export class SchoolClassResponseDto extends ApiResponseDto<SchoolClassDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolClassDto,
  })
  @IsObject()
  data: SchoolClassDto;
}
