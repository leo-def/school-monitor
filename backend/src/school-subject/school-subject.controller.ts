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
import { SchoolSubjectPaginationParamsDto } from './_types/school-subject-pagination-params.dto';
import { SchoolSubjectService } from './school-subject.service';
import { SchoolSubjectDto } from './_types/school-subject.dto';

@ApiTags('School Monitor | SchoolSubject')
@Controller('school-subject')
export class SchoolSubjectController {
  constructor(private readonly service: SchoolSubjectService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolSubjectDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    description: 'Params',
    type: SchoolSubjectPaginationParamsDto,
  })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolSubjectPaginationParamsDto,
  ): Promise<Array<SchoolSubjectDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolSubjectDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSubjectDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolSubjectDto })
  @Post()
  async create(@Body() data: SchoolSubjectDto): Promise<SchoolSubjectDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolSubjectDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSubjectDto,
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
  @ApiBody({ description: 'Data', type: SchoolSubjectDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolSubjectDto,
  ): Promise<SchoolSubjectDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolSubjectDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSubjectDto,
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
  async delete(@Param('id') id: string): Promise<SchoolSubjectDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolSubjectDto, response);
  }
}
