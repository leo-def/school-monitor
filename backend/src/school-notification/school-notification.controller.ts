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
import { SchoolNotificationService } from './school-notification.service';
import { SchoolNotificationDto } from './_types/school-notification.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolNotificationPaginationParamsDto } from './_types/school-notification-pagination-params.dto';
import { SchoolNotificationArrayResponseDto } from './_types/school-notification-array-response.dto';
import { SchoolNotificationResponseDto } from './_types/school-notification-response.dto';
import { UpdateSchoolNotificationRequestDto } from './_types/update-school-notification-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';

@ApiTags('School Monitor | SchoolNotification')
@Controller('school-notification')
export class SchoolNotificationController {
  constructor(private readonly service: SchoolNotificationService) {}

  @ApiOperation({
    description: 'Fetch by section.',
    summary: 'Fetch by section.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: SchoolNotificationPaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: SchoolNotificationPaginationParamsDto,
  ): Promise<Array<SchoolNotificationDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationArrayResponseDto,
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
  ): Promise<Array<SchoolNotificationDto>> {
    const response = await this.service.section(params);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateSchoolNotificationRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: UpdateSchoolNotificationRequestDto,
  ): Promise<SchoolNotificationDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateSchoolNotificationRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSchoolNotificationRequestDto,
  ): Promise<SchoolNotificationDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationResponseDto,
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
  async delete(@Param('id') id: string): Promise<SchoolNotificationDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolNotificationDto, response);
  }
}
