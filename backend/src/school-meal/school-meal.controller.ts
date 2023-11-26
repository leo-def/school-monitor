import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiParam,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { SchoolMealService } from './school-meal.service';
import { SchoolMealDto } from './_types/school-meal.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolMealPaginationParamsDto } from './_types/school-meal-pagination-params.dto';

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
    type: Array<SchoolMealDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolMealPaginationParamsDto })
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
    type: Array<SchoolMealDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
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
    type: SchoolMealDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolMealDto })
  @Post()
  async create(@Body() data: SchoolMealDto): Promise<SchoolMealDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Id',
    type: 'string',
  })
  @ApiBody({ description: 'Data', type: SchoolMealDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolMealDto,
  ): Promise<SchoolMealDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolMealDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolMealDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Id',
    type: 'string',
  })
  @Delete()
  async delete(@Param('id') id: string): Promise<SchoolMealDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolMealDto, response);
  }
}
