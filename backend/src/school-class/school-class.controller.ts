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
import { SchoolClassService } from './school-class.service';
import { SchoolClassDto } from './_types/school-class.dto';
import { SchoolClassPaginationParamsDto } from './_types/school-class-pagination-params.dto';
import { SchoolClassResponseDto } from './_types/school-class-response.dto';
import { UpdateSchoolClassRequestDto } from './_types/update-school-class-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { SchoolClassPaginationResponseDto } from './_types/school-class-pagination-response.dto';

@ApiTags('School Monitor | SchoolClass')
@Controller('school-class')
export class SchoolClassController {
  constructor(private readonly service: SchoolClassService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolClassPaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolClassPaginationParamsDto,
  ): Promise<SchoolClassPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolClassPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolClassRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolClassRequestDto,
  ): Promise<SchoolClassDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolClassDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolClassRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolClassRequestDto,
  ): Promise<SchoolClassDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolClassDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolClassResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolClassDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolClassDto, response);
  }
}
