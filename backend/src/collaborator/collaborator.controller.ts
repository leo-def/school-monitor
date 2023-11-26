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
import { CollaboratorService } from './collaborator.service';
import { CollaboratorDto } from './_types/collaborator.dto';
import { CollaboratorPaginationParamsDto } from './_types/collaborator-pagination-params.dto';

@ApiTags('School Monitor | Collaborator')
@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly service: CollaboratorService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<CollaboratorDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: CollaboratorPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: CollaboratorPaginationParamsDto,
  ): Promise<Array<CollaboratorDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(CollaboratorDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: CollaboratorDto })
  @Post()
  async create(@Body() data: CollaboratorDto): Promise<CollaboratorDto> {
    const response = await this.service.create(data);
    return plainToInstance(CollaboratorDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorDto,
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
  @ApiBody({ description: 'Data', type: CollaboratorDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: CollaboratorDto,
  ): Promise<CollaboratorDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(CollaboratorDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorDto,
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
  async delete(@Param('id') id: string): Promise<CollaboratorDto> {
    const response = await this.service.delete(id);
    return plainToInstance(CollaboratorDto, response);
  }
}
