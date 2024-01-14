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
import { SchoolProjectService } from './school-project.service';
import { SchoolProjectDto } from './_types/school-project.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolProjectPaginationParamsDto } from './_types/school-project-pagination-params.dto';
import { SchoolProjectArrayResponseDto } from './_types/school-project-array-response.dto';
import { SchoolProjectResponseDto } from './_types/school-project-response.dto';
import { UpdateSchoolProjectRequestDto } from './_types/update-school-project-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { SchoolProjectPaginationResponseDto } from './_types/school-project-pagination-response.dto';

@ApiTags('School Monitor | SchoolProject')
@Controller('school-project')
export class SchoolProjectController {
  constructor(private readonly service: SchoolProjectService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolProjectPaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolProjectPaginationParamsDto,
  ): Promise<SchoolProjectPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolProjectPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectArrayResponseDto,
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
  ): Promise<Array<SchoolProjectDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolProjectRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolProjectRequestDto,
  ): Promise<SchoolProjectDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolProjectRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolProjectRequestDto,
  ): Promise<SchoolProjectDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolProjectDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolProjectDto, response);
  }
}
