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
import { SchoolAppraisalService } from './school-appraisal.service';
import { SchoolAppraisalDto } from './_types/school-appraisal.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAppraisalPaginationParamsDto } from './_types/school-appraisal-pagination-params.dto';
import { SchoolAppraisalArrayResponseDto } from './_types/school-appraisal-array-response.dto';
import { SchoolAppraisalResponseDto } from './_types/school-appraisal-response.dto';
import { UpdateSchoolAppraisalRequestDto } from './_types/update-school-appraisal-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { SchoolAppraisalPaginationResponseDto } from './_types/school-appraisal-pagination-response.dto';

@ApiTags('School Monitor | SchoolAppraisal')
@Controller('school-appraisal')
export class SchoolAppraisalController {
  constructor(private readonly service: SchoolAppraisalService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolAppraisalPaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolAppraisalPaginationParamsDto,
  ): Promise<SchoolAppraisalPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolAppraisalPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalArrayResponseDto,
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
  ): Promise<Array<SchoolAppraisalDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolAppraisalRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolAppraisalRequestDto,
  ): Promise<SchoolAppraisalDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolAppraisalRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolAppraisalRequestDto,
  ): Promise<SchoolAppraisalDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolAppraisalDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolAppraisalResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolAppraisalDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolAppraisalDto, response);
  }
}
