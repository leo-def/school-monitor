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
import { CompanyService } from './company.service';
import { CompanyDto } from './_types/company.dto';
import { CompanyPaginationParamsDto } from './_types/company-pagination-params.dto';

@ApiTags('School Monitor | Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<CompanyDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: CompanyPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: CompanyPaginationParamsDto,
  ): Promise<Array<CompanyDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(CompanyDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: CompanyDto })
  @Post()
  async create(@Body() data: CompanyDto): Promise<CompanyDto> {
    const response = await this.service.create(data);
    return plainToInstance(CompanyDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyDto,
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
  @ApiBody({ description: 'Data', type: CompanyDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: CompanyDto,
  ): Promise<CompanyDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(CompanyDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyDto,
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
  async delete(@Param('id') id: string): Promise<CompanyDto> {
    const response = await this.service.delete(id);
    return plainToInstance(CompanyDto, response);
  }
}
