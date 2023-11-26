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
import { SchoolTermService } from './school-term.service';
import { SchoolTermDto } from './_types/school-term.dto';
import { SchoolTermPaginationParamsDto } from './_types/school-term-pagination-params.dto';

@ApiTags('School Monitor | SchoolTerm')
@Controller('school-term')
export class SchoolTermController {
  constructor(private readonly service: SchoolTermService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolTermDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    description: 'Params',
    type: SchoolTermPaginationParamsDto,
  })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolTermPaginationParamsDto,
  ): Promise<Array<SchoolTermDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolTermDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolTermDto })
  @Post()
  async create(@Body() data: SchoolTermDto): Promise<SchoolTermDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolTermDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermDto,
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
  @ApiBody({ description: 'Data', type: SchoolTermDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolTermDto,
  ): Promise<SchoolTermDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolTermDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolTermDto,
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
  async delete(@Param('id') id: string): Promise<SchoolTermDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolTermDto, response);
  }
}
