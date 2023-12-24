import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { BranchDto } from './branch.dto';

export class BranchArrayResponseDto extends ApiResponseDto<Array<BranchDto>> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: BranchDto,
  })
  @IsObject()
  data: Array<BranchDto>;
}
