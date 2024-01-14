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
import { BranchService } from './branch.service';
import { BranchDto } from './_types/branch.dto';
import { BranchPaginationParamsDto } from './_types/branch-pagination-params.dto';
import { BranchResponseDto } from './_types/branch-response.dto';
import { UpdateBranchRequestDto } from './_types/update-branch-request.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { BranchPaginationResponseDto } from './_types/branch-pagination-response.dto';

@ApiTags('School Monitor | Branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly service: BranchService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchPaginationResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: BranchPaginationParamsDto })
  @ApiBearerAuth()
  @Post('fetch')
  async fetch(
    @Body() params: BranchPaginationParamsDto,
  ): Promise<BranchPaginationResponseDto> {
    const response = await this.service.fetch(params);
    return plainToInstance(BranchPaginationResponseDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: UpdateBranchRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(@Body() data: UpdateBranchRequestDto): Promise<BranchDto> {
    const response = await this.service.create(data);
    return plainToInstance(BranchDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateBranchRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBranchRequestDto,
  ): Promise<BranchDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(BranchDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchResponseDto,
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
  async delete(@Param('id') id: string): Promise<BranchDto> {
    const response = await this.service.delete(id);
    return plainToInstance(BranchDto, response);
  }
}
