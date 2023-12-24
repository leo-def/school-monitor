import { ApiProperty } from '@nestjs/swagger';
import { Collaborator, CollaboratorRole } from '@prisma/client';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class CollaboratorDto extends EntityDto implements Collaborator {
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
  @IsString()
  accountId: string;

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
  branchId: string;

  @ApiProperty({
    name: 'role',
    type: String,
    enum: CollaboratorRole,
    enumName: 'CollaboratorRoleEnum',
  })
  @IsEnum(CollaboratorRole)
  role: CollaboratorRole;
}
