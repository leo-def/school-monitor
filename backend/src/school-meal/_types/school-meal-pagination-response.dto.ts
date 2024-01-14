import { PaginationResponse } from 'src/pagination/_types/response';
import { SchoolMealPaginationParamsDto } from './school-meal-pagination-params.dto';
import { SchoolMealDto } from './school-meal.dto';

export class SchoolMealPaginationResponseDto extends PaginationResponse<
  SchoolMealDto,
  SchoolMealPaginationParamsDto
> {}
