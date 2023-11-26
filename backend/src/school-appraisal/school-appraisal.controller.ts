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
import { SchoolAppraisalService } from './school-appraisal.service';
import { SchoolAppraisalDto } from './_types/school-appraisal.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAppraisalPaginationParamsDto } from './_types/school-appraisal-pagination-params.dto';

@ApiTags('School Monitor | SchoolAppraisal')
@Controller('school-appraisal')
export class SchoolAppraisalController {
  constructor(private readonly service: SchoolAppraisalService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolAppraisalDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolAppraisalPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: SchoolAppraisalPaginationParamsDto,
  ): Promise<Array<SchoolAppraisalDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<SchoolAppraisalDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
  @Post('section')
  async section(
    @Body() params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolAppraisalDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolAppraisalDto })
  @Post()
  async create(@Body() data: SchoolAppraisalDto): Promise<SchoolAppraisalDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalDto,
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
  @ApiBody({ description: 'Data', type: SchoolAppraisalDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolAppraisalDto,
  ): Promise<SchoolAppraisalDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalDto,
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
  async delete(@Param('id') id: string): Promise<SchoolAppraisalDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolAppraisalDto, response);
  }
}
