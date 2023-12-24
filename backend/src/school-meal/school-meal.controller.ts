import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiParam,
  ApiBody,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { SchoolMealService } from './school-meal.service';
import { SchoolMealDto } from './_types/school-meal.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolMealPaginationParamsDto } from './_types/school-meal-pagination-params.dto';
import { SchoolMealArrayResponseDto } from './_types/school-meal-array-response.dto';
import { SchoolMealResponseDto } from './_types/school-meal-response.dto';
import { UpdateSchoolMealRequestDto } from './_types/update-school-meal-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';

@ApiTags('School Monitor | SchoolMeal')
@Controller('school-meal')
export class SchoolMealController {
  constructor(private readonly service: SchoolMealService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolMealPaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolMealPaginationParamsDto,
  ): Promise<Array<SchoolMealDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
  @ApiBearerAuth()
  @Post('section')
  async section(
    @Body() params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolMealDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolMealRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolMealRequestDto,
  ): Promise<SchoolMealDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Id',
    type: 'string',
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolMealRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolMealRequestDto,
  ): Promise<SchoolMealDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Id',
    type: 'string',
  })
  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<SchoolMealDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolMealDto, response);
  }
}
