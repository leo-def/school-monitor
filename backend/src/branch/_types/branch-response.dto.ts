import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { BranchDto } from './branch.dto';

export class BranchResponseDto extends ApiResponseDto<BranchDto> {
  @ApiProperty({
    name: 'data',
    type: BranchDto,
  })
  @IsObject()
  data: BranchDto;
}
