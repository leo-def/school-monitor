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
import { AccountService } from './_services/account/account.service';
import { AccountDto } from './_types/account.dto';
import { AccountPaginationParamsDto } from './_types/account-pagination-params.dto';
import { AccountResponseDto } from './_types/account-response.dto';
import { AccountArrayResponseDto } from './_types/account-array-response.dto';
import { ApiErrorResponseDto } from 'src/api/_dos/api-error-response.dto';
import { UpdateUsernameRequestDto } from './_types/update-username-request.dto';
import { UpdatePasswordRequestDto } from './_types/update-password-request.dto';
import { UpdateAccountRequestDto } from './_types/update-account-request.dto';
import { CreateAccountRequestDto } from './_types/create-account-request.dto';
import { CreateCustomerAccountRequestDto } from './_types/create-customer-account-request.dto';

@ApiTags('School Monitor | Account')
@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @ApiOperation({ description: 'Fetch.', summary: 'Fetch.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountArrayResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Params', type: AccountPaginationParamsDto })
  @ApiBearerAuth()
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
    type: AccountResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateAccountRequestDto })
  @ApiBearerAuth()
  @Post()
  async create(@Body() data: CreateAccountRequestDto): Promise<AccountDto> {
    const response = await this.service.create(data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({
    description: 'Create customer.',
    summary: 'Create customer.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error',
    type: ApiErrorResponseDto,
  })
  @ApiBody({ description: 'Data', type: CreateCustomerAccountRequestDto })
  @ApiBearerAuth()
  @Post()
  async createCustomer(
    @Body() data: CreateCustomerAccountRequestDto,
  ): Promise<AccountDto> {
    const response = await this.service.createCustomer(data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({ description: 'Update.', summary: 'Update.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateAccountRequestDto })
  @ApiBearerAuth()
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAccountRequestDto,
  ): Promise<AccountDto> {
    const response = await this.service.update(id, data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({
    description: 'Update username.',
    summary: 'Update username.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdateUsernameRequestDto })
  @ApiBearerAuth()
  @Put(':id/username')
  async updateUsername(
    @Param('id') id: string,
    @Body() data: UpdateUsernameRequestDto,
  ): Promise<AccountDto> {
    const response = await this.service.updateUsername(id, data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({
    description: 'Update password.',
    summary: 'Update password.',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountResponseDto,
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
  @ApiBody({ description: 'Data', type: UpdatePasswordRequestDto })
  @ApiBearerAuth()
  @Put(':id/password')
  async updatePassword(
    @Param('id') id: string,
    @Body() data: UpdatePasswordRequestDto,
  ): Promise<AccountDto> {
    const response = await this.service.updatePassword(id, data);
    return plainToInstance(AccountDto, response);
  }

  @ApiOperation({ description: 'Delete.', summary: 'Delete.' })
  @ApiOkResponse({
    description: 'OK.',
    type: AccountResponseDto,
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
  async delete(@Param('id') id: string): Promise<AccountDto> {
    const response = await this.service.delete(id);
    return plainToInstance(AccountDto, response);
  }
}
