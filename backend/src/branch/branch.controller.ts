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
import { BranchService } from './branch.service';
import { BranchDto } from './_types/branch.dto';
import { BranchPaginationParamsDto } from './_types/branch-pagination-params.dto';

@ApiTags('School Monitor | Branch')
@Controller('branch')
export class BranchController {
  constructor(private readonly service: BranchService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<BranchDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: BranchPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: BranchPaginationParamsDto,
  ): Promise<Array<BranchDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(BranchDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: BranchDto })
  @Post()
  async create(@Body() data: BranchDto): Promise<BranchDto> {
    const response = await this.service.create(data);
    return plainToInstance(BranchDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchDto,
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
  @ApiBody({ description: 'Data', type: BranchDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: BranchDto,
  ): Promise<BranchDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(BranchDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: BranchDto,
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
  async delete(@Param('id') id: string): Promise<BranchDto> {
    const response = await this.service.delete(id);
    return plainToInstance(BranchDto, response);
  }
}
