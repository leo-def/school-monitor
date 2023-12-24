import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { CollaboratorDto } from './collaborator.dto';

export class CollaboratorResponseDto extends ApiResponseDto<CollaboratorDto> {
  @ApiProperty({
    name: 'data',
    type: CollaboratorDto,
  })
  @IsObject()
  data: CollaboratorDto;
}
