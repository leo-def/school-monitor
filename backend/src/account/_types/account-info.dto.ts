import { CollaboratorRole } from '@prisma/client';
import {
  AccountInfo,
  BranchInfo,
  CollaboratorInfo,
  CompanyInfo,
} from './account-info';
import { AccountDto } from './account.dto';
import { EntityDto } from 'src/_types/entity.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject, IsArray } from 'class-validator';

export class BranchInfoDto extends EntityDto implements BranchInfo {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  companyId: string;
}

export class CompanyInfoDto extends EntityDto implements CompanyInfo {
  @ApiProperty({
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: BranchInfoDto,
    isArray: true,
  })
  @IsArray()
  branchs: Array<BranchInfoDto>;
}

export class CollaboratorInfoDto extends EntityDto implements CollaboratorInfo {
  @ApiProperty({
    type: String,
  })
  @IsString()
  accountId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  companyId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  branchId: string;

  role: CollaboratorRole;

  @ApiProperty({
    type: CompanyInfoDto,
  })
  @IsObject()
  company: CompanyInfoDto;

  @ApiProperty({
    type: BranchInfoDto,
  })
  @IsObject()
  branch: BranchInfoDto;
}

export class AccountInfoDto extends AccountDto implements AccountInfo {
  @ApiProperty({
    type: CollaboratorInfoDto,
    isArray: true,
  })
  @IsArray()
  collaboratorsList: Array<CollaboratorInfoDto>;
}
