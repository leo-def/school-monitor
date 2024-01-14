import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { GradeTemplateService } from './grade-template.service';
import { GradeTemplatePaginationParamsDto } from './_types/grade-template-pagination-params.dto';
import { GradeTemplateResponseDto } from './_types/grade-template-response.dto';
import { GradeTemplateDto } from './_types/grade-template.dto';
import { UpdateGradeTemplateRequestDto } from './_types/update-grade-template-request.dto';
import { GradeTemplatePaginationResponseDto } from './_types/grade-template-pagination-response.dto';

@Controller('grade-template')
export class GradeTemplateController {
  constructor(private readonly service: GradeTemplateService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: GradeTemplatePaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: GradeTemplatePaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: GradeTemplatePaginationParamsDto,
  ): Promise<GradeTemplatePaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(GradeTemplatePaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: GradeTemplateResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateGradeTemplateRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateGradeTemplateRequestDto,
  ): Promise<GradeTemplateDto> {
    const response = await this.service.create(data);
    return plainToInstance(GradeTemplateDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: GradeTemplateResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateGradeTemplateRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateGradeTemplateRequestDto,
  ): Promise<GradeTemplateDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(GradeTemplateDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: GradeTemplateResponseDto,
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
  async delete(@Param('id') id: string): Promise<GradeTemplateDto> {
    const response = await this.service.delete(id);
    return plainToInstance(GradeTemplateDto, response);
  }
}
