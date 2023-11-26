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
import { SchoolClassService } from './school-class.service';
import { SchoolClassDto } from './_types/school-class.dto';
import { SchoolClassPaginationParamsDto } from './_types/school-class-pagination-params.dto';

@ApiTags('School Monitor | SchoolClass')
@Controller('school-class')
export class SchoolClassController {
  constructor(private readonly service: SchoolClassService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolClassDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolClassPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolClassPaginationParamsDto,
  ): Promise<Array<SchoolClassDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolClassDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolClassDto })
  @Post()
  async create(@Body() data: SchoolClassDto): Promise<SchoolClassDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolClassDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassDto,
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
  @ApiBody({ description: 'Data', type: SchoolClassDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolClassDto,
  ): Promise<SchoolClassDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolClassDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassDto,
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
  async delete(@Param('id') id: string): Promise<SchoolClassDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolClassDto, response);
  }
}
