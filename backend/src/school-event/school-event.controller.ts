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
import { SchoolEventService } from './school-event.service';
import { SchoolEventDto } from './_types/school-event.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolEventPaginationParamsDto } from './_types/school-event-pagination-params.dto';

@ApiTags('School Monitor | SchoolEvent')
@Controller('school-event')
export class SchoolEventController {
  constructor(private readonly service: SchoolEventService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolEventDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolEventPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolEventPaginationParamsDto,
  ): Promise<Array<SchoolEventDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolEventDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
  @Post('section')
  async section(
    @Body() params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolEventDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolEventDto })
  @Post()
  async create(@Body() data: SchoolEventDto): Promise<SchoolEventDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventDto,
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
  @ApiBody({ description: 'Data', type: SchoolEventDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolEventDto,
  ): Promise<SchoolEventDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventDto,
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
  async delete(@Param('id') id: string): Promise<SchoolEventDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolEventDto, response);
  }
}
