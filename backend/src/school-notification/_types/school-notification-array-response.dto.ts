import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolNotificationDto } from './school-notification.dto';

export class SchoolNotificationArrayResponseDto extends ApiResponseDto<
  Array<SchoolNotificationDto>
> {
  @ApiProperty({
    name: 'data',
    isArray: true,
    type: SchoolNotificationDto,
  })
  @IsObject()
  data: Array<SchoolNotificationDto>;
}
