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
import { SchoolTermService } from './school-term.service';
import { SchoolTermDto } from './_types/school-term.dto';
import { SchoolTermPaginationParamsDto } from './_types/school-term-pagination-params.dto';
import { UpdateSchoolTermRequestDto } from './_types/update-school-term-request.dto';
import { SchoolTermResponseDto } from './_types/school-term-response.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { CreateSchoolTermRequestDto } from './_types/create-school-term-request.dto';
import { SchoolTermPaginationResponseDto } from './_types/school-term-pagination-response.dto';

@ApiTags('School Monitor | SchoolTerm')
@Controller('school-term')
export class SchoolTermController {
  constructor(private readonly service: SchoolTermService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolTermPaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolTermPaginationParamsDto,
  ): Promise<SchoolTermPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolTermPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateSchoolTermRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: CreateSchoolTermRequestDto,
  ): Promise<SchoolTermDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolTermDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolTermRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolTermRequestDto,
  ): Promise<SchoolTermDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolTermDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolTermDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolTermDto, response);
  }
}
