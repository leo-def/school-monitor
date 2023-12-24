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
import { SchoolSectionPaginationParamsDto } from './_types/school-section-pagination-params.dto';
import { SchoolSectionDto } from './_types/school-section.dto';
import { SchoolSectionService } from './school-section.service';
import { SchoolSectionArrayResponseDto } from './_types/school-section-array-response.dto';
import { SchoolSectionResponseDto } from './_types/school-section-response.dto';
import { UpdateSchoolSectionRequestDto } from './_types/update-school-section-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { CreateSchoolSectionRequestDto } from './_types/create-school-section-request.dto';
import { SchoolSectionGetOrCreateParamsDto } from './_types/school-section-get-or-create-params.dto';

@ApiTags('School Monitor | SchoolSection')
@Controller('school-section')
export class SchoolSectionController {
  constructor(private readonly service: SchoolSectionService) {}

  @ApiOperation({
    description: 'Get or create school section.',
    summary: 'Get or create school section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolSectionGetOrCreateParamsDto,
  })
  @ApiBearerAuth()
  @Post('get-or-create')
  async getOrCreate(
    @Body() params: SchoolSectionGetOrCreateParamsDto,
  ): Promise<Array<SchoolSectionDto>> {
    const response = await this.service.getOrCreate(params);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolSectionPaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolSectionDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateSchoolSectionRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: CreateSchoolSectionRequestDto,
  ): Promise<SchoolSectionDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolSectionRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolSectionRequestDto,
  ): Promise<SchoolSectionDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolSectionDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolSectionDto, response);
  }
}
