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
import { SchoolSubjectPaginationParamsDto } from './_types/school-subject-pagination-params.dto';
import { SchoolSubjectService } from './school-subject.service';
import { SchoolSubjectDto } from './_types/school-subject.dto';
import { SchoolSubjectArrayResponseDto } from './_types/school-subject-array-response.dto';
import { SchoolSubjectResponseDto } from './_types/school-subject-response.dto';
import { UpdateSchoolSubjectRequestDto } from './_types/update-school-subject-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { CreateSchoolSubjectRequestDto } from './_types/create-school-subject-request.dto';

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
    type: SchoolSubjectArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolSubjectPaginationParamsDto,
  })
  @ApiBearerAuth()
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
    type: SchoolSubjectResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateSchoolSubjectRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: CreateSchoolSubjectRequestDto,
  ): Promise<SchoolSubjectDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolSubjectDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSubjectResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolSubjectRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolSubjectRequestDto,
  ): Promise<SchoolSubjectDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolSubjectDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolSubjectResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolSubjectDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolSubjectDto, response);
  }
}
