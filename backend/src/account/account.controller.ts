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
import { AccountService } from './_services/account/account.service';
import { AccountDto } from './_types/account.dto';
import { AccountPaginationParamsDto } from './_types/account-pagination-params.dto';

@ApiTags('School Monitor | Account')
@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: Array<AccountDto>,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Params', type: AccountPaginationParamsDto })
  @Post('fetch')
  async fetch(
    @Body() params: AccountPaginationParamsDto,
  ): Promise<Array<AccountDto>> {
    const response = await this.service.fetch(params);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({ description: 'Create.', summary: 'Create.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({ description: 'Data', type: AccountDto })
  @Post()
  async create(@Body() data: AccountDto): Promise<AccountDto> {
    const response = await this.service.create(data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountDto,
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
  @ApiBody({ description: 'Data', type: AccountDto })
  @Put()
  async update(
    @Param('id') id: string,
    @Body() data: AccountDto,
  ): Promise<AccountDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountDto,
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
  async delete(@Param('id') id: string): Promise<AccountDto> {
    const response = await this.service.delete(id);
    return plainToInstance(AccountDto, response);
  }
}
