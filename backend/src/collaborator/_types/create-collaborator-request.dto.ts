import { ApiProperty } from '@nestjs/swagger';
import { Collaborator, CollaboratorRole } from '@prisma/client';
import { IsEnum, IsObject, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';
import { CreateCustomerAccountRequestDto } from 'src/account/_types/create-customer-account-request.dto';

export class CreateCollaboratorRequestDto
  implements Omit<Collaborator, EntityFields | 'accountId' | 'branchId'>
{
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'accountId',
    type: String,
  })
  @IsOptional()
  @IsString()
  accountId?: string;

  @ApiProperty({
    name: 'account',
    type: CreateCustomerAccountRequestDto,
  })
  @IsOptional()
  @IsObject()
  account?: CreateCustomerAccountRequestDto;

  @ApiProperty({
    name: 'role',
    type: String,
    enum: CollaboratorRole,
    enumName: 'CollaboratorRoleEnum',
  })
  @IsEnum(CollaboratorRole)
  role: CollaboratorRole;

  @ApiProperty({
    name: 'companyId',
    type: String,
  })
  @IsString()
  companyId: string;

  @ApiProperty({
    name: 'branchId',
    type: String,
  })
  @IsOptional()
  @IsString()
  branchId?: string;
}
