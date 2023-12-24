import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolMealDto } from './school-meal.dto';

export class SchoolMealResponseDto extends ApiResponseDto<SchoolMealDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolMealDto,
  })
  @IsObject()
  data: SchoolMealDto;
}
