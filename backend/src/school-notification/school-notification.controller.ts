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
import { SchoolNotificationService } from './school-notification.service';
import { SchoolNotificationDto } from './_types/school-notification.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolNotificationPaginationParamsDto } from './_types/school-notification-pagination-params.dto';

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
    type: Array<SchoolNotificationDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    description: 'Params',
    type: SchoolNotificationPaginationParamsDto,
  })
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
    type: Array<SchoolNotificationDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: SchoolSectionPaginationParamsDto })
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
    type: SchoolNotificationDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: SchoolNotificationDto })
  @Post()
  async create(
    @Body() data: SchoolNotificationDto,
  ): Promise<SchoolNotificationDto> {
    const response = await this.service.create(data);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationDto,
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
  @ApiBody({ description: 'Data', type: SchoolNotificationDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: SchoolNotificationDto,
  ): Promise<SchoolNotificationDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(SchoolNotificationDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SchoolNotificationDto,
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
  async delete(@Param('id') id: string): Promise<SchoolNotificationDto> {
    const response = await this.service.delete(id);
    return plainToInstance(SchoolNotificationDto, response);
  }
}
