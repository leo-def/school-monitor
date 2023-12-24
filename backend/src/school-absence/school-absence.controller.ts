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
import { SchoolAbsenceService } from './school-absence.service';
import { SchoolAbsenceDto } from './_types/school-absence.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAbsencePaginationParamsDto } from './_types/school-absence-pagination-params.dto';
import { SchoolAbsenceArrayResponseDto } from './_types/school-absence-array-response.dto';
import { SchoolAbsenceResponseDto } from './_types/school-absence-response.dto';
import { UpdateSchoolAbsenceRequestDto } from './_types/update-school-absence-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';

@ApiTags('School Monitor | SchoolAbsence')
@Controller('school-absence')
export class SchoolAbsenceController {
  constructor(private readonly service: SchoolAbsenceService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAbsenceArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolAbsencePaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolAbsencePaginationParamsDto,
  ): Promise<Array<SchoolAbsenceDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolAbsenceDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    isArray: true,
    type: SchoolAbsenceDto,
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
  ): Promise<Array<SchoolAbsenceDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolAbsenceDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAbsenceResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolAbsenceRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolAbsenceRequestDto,
  ): Promise<SchoolAbsenceDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolAbsenceDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAbsenceResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolAbsenceRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolAbsenceRequestDto,
  ): Promise<SchoolAbsenceDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolAbsenceDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAbsenceResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolAbsenceDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolAbsenceDto, response);
  }
}
