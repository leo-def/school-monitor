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
import { CompanyService } from './company.service';
import { CompanyDto } from './_types/company.dto';
import { CompanyPaginationParamsDto } from './_types/company-pagination-params.dto';
import { UpdateCompanyRequestDto } from './_types/update-company-request.dto';
import { CompanyResponseDto } from './_types/company-response.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { CompanyPaginationResponseDto } from './_types/company-pagination-response.dto';

@ApiTags('School Monitor | Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: CompanyPaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: CompanyPaginationParamsDto,
  ): Promise<CompanyPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(CompanyPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateCompanyRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(@Body() data: UpdateCompanyRequestDto): Promise<CompanyDto> {
    const response = await this.service.create(data);
    return plainToInstance(CompanyDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateCompanyRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCompanyRequestDto,
  ): Promise<CompanyDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(CompanyDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CompanyResponseDto,
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
  async delete(@Param('id') id: string): Promise<CompanyDto> {
    const response = await this.service.delete(id);
    return plainToInstance(CompanyDto, response);
  }
}
