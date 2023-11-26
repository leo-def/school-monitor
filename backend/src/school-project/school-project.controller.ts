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
import { SchoolProjectService } from './school-project.service';
import { SchoolProjectDto } from './_types/school-project.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolProjectPaginationParamsDto } from './_types/school-project-pagination-params.dto';

@ApiTags('School Monitor | SchoolProject')
@Controller('school-project')
export class SchoolProjectController {
  constructor(private readonly service: SchoolProjectService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolProjectDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    description: 'Params',
    type: SchoolProjectPaginationParamsDto,
  })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolProjectPaginationParamsDto,
  ): Promise<Array<SchoolProjectDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolProjectDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
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
    type: SchoolProjectDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolProjectDto })
  @Post()
  async create(@Body() data: SchoolProjectDto): Promise<SchoolProjectDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectDto,
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
  @ApiBody({ description: 'Data', type: SchoolProjectDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolProjectDto,
  ): Promise<SchoolProjectDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolProjectDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolProjectDto,
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
  async delete(@Param('id') id: string): Promise<SchoolProjectDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolProjectDto, response);
  }
}
