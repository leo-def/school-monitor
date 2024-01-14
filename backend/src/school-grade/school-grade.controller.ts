import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { SchoolGradeService } from './school-grade.service';
import { SchoolGradePaginationParamsDto } from './_types/school-grade-pagination-params.dto';
import { SchoolGradeResponseDto } from './_types/school-grade-response.dto';
import { SchoolGradeDto } from './_types/school-grade.dto';
import { UpdateSchoolGradeRequestDto } from './_types/update-school-grade-request.dto';
import { SchoolGradePaginationResponseDto } from './_types/school-grade-pagination-response.dto';

@Controller('school-grade')
export class SchoolGradeController {
  constructor(private readonly service: SchoolGradeService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolGradePaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolGradePaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolGradePaginationParamsDto,
  ): Promise<SchoolGradePaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolGradePaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolGradeResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolGradeRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolGradeRequestDto,
  ): Promise<SchoolGradeDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolGradeDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolGradeResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolGradeRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolGradeRequestDto,
  ): Promise<SchoolGradeDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolGradeDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolGradeResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolGradeDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolGradeDto, response);
  }
}
