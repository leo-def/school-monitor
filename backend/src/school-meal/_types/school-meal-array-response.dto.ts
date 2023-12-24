import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolMealDto } from './school-meal.dto';

export class SchoolMealArrayResponseDto extends ApiResponseDto<
  Array<SchoolMealDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolMealDto,
  })
  @IsObject()
  data: Array<SchoolMealDto>;
}
