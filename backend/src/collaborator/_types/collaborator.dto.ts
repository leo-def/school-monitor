import { ApiProperty } from '@nestjs/swagger';
import { Collaborator, CollaboratorRole } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class CollaboratorDto extends EntityDto implements Collaborator {
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

  @ApiProperty({
    type: String,
    enum: CollaboratorRole,
    enumName: 'CollaboratorRoleEnum',
  })
  @IsEnum(CollaboratorRole)
  role: CollaboratorRole;
}
