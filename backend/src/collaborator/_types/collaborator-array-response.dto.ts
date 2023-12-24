import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { CollaboratorDto } from './collaborator.dto';

export class CollaboratorArrayResponseDto extends ApiResponseDto<
  Array<CollaboratorDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: CollaboratorDto,
  })
  @IsObject()
  data: Array<CollaboratorDto>;
}
