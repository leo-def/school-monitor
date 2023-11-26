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
import { SchoolSectionPaginationParamsDto } from './_types/school-section-pagination-params.dto';
import { SchoolSectionDto } from './_types/school-section.dto';
import { SchoolSectionService } from './school-section.service';

@ApiTags('School Monitor | SchoolSection')
@Controller('school-section')
export class SchoolSectionController {
  constructor(private readonly service: SchoolSectionService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolSectionDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    description: 'Params',
    type: SchoolSectionPaginationParamsDto,
  })
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
    type: SchoolSectionDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolSectionDto })
  @Post()
  async create(@Body() data: SchoolSectionDto): Promise<SchoolSectionDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionDto,
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
  @ApiBody({ description: 'Data', type: SchoolSectionDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolSectionDto,
  ): Promise<SchoolSectionDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolSectionDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSectionDto,
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
  async delete(@Param('id') id: string): Promise<SchoolSectionDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolSectionDto, response);
  }
}
