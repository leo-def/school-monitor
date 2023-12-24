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
import { SchoolEventService } from './school-event.service';
import { SchoolEventDto } from './_types/school-event.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolEventPaginationParamsDto } from './_types/school-event-pagination-params.dto';
import { SchoolEventArrayResponseDto } from './_types/school-event-array-response.dto';
import { SchoolEventResponseDto } from './_types/school-event-response.dto';
import { UpdateSchoolEventRequestDto } from './_types/update-school-event-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';

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
    type: SchoolEventArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: SchoolEventPaginationParamsDto })
  @ApiBearerAuth()
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
    type: SchoolEventArrayResponseDto,
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
  ): Promise<Array<SchoolEventDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolEventRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolEventRequestDto,
  ): Promise<SchoolEventDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolEventRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolEventRequestDto,
  ): Promise<SchoolEventDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolEventDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolEventResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolEventDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolEventDto, response);
  }
}
