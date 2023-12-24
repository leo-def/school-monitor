import { ApiProperty } from '@nestjs/swagger';
import { Collaborator, CollaboratorRole } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EntityFields } from 'src/_types/entity-fields';

export class UpdateCollaboratorRequestDto
  implements
    Omit<
      Partial<Collaborator>,
      EntityFields | 'accountId' | 'branchId' | 'companyId'
    >
{
  @ApiProperty({
    name: 'title',
    type: String,
  })
  @IsString()
  title: string;

  @ApiProperty({
    name: 'role',
    type: String,
    enum: CollaboratorRole,
    enumName: 'CollaboratorRoleEnum',
  })
  @IsEnum(CollaboratorRole)
  role: CollaboratorRole;

  @ApiProperty({
    name: 'branchId',
    type: String,
  })
  @IsOptional()
  @IsString()
  branchId?: string;
}
