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
import { CollaboratorService } from './collaborator.service';
import { CollaboratorDto } from './_types/collaborator.dto';
import { CollaboratorPaginationParamsDto } from './_types/collaborator-pagination-params.dto';
import { CollaboratorResponseDto } from './_types/collaborator-response.dto';
import { UpdateCollaboratorRequestDto } from './_types/update-collaborator-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { CreateCollaboratorRequestDto } from './_types/create-collaborator-request.dto';
import { CollaboratorPaginationResponseDto } from './_types/collaborator-pagination-response.dto';

@ApiTags('School Monitor | Collaborator')
@Controller('collaborator')
export class CollaboratorController {
  constructor(private readonly service: CollaboratorService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({
    description: 'Params',
    type: CollaboratorPaginationParamsDto,
  })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: CollaboratorPaginationParamsDto,
  ): Promise<CollaboratorPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(CollaboratorPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateCollaboratorRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() data: CreateCollaboratorRequestDto,
  ): Promise<CollaboratorDto> {
    const response = await this.service.create(data);
    return plainToInstance(CollaboratorDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateCollaboratorRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCollaboratorRequestDto,
  ): Promise<CollaboratorDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(CollaboratorDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: CollaboratorResponseDto,
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
  async delete(@Param('id') id: string): Promise<CollaboratorDto> {
    const response = await this.service.delete(id);
    return plainToInstance(CollaboratorDto, response);
  }
}
