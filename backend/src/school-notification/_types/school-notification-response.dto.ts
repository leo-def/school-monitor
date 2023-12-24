import { IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiResponseDto } from 'src/api/_dos/api-response.dto';
import { SchoolNotificationDto } from './school-notification.dto';

export class SchoolNotificationResponseDto extends ApiResponseDto<SchoolNotificationDto> {
  @ApiProperty({
    name: 'data',
    type: SchoolNotificationDto,
  })
  @IsObject()
  data: SchoolNotificationDto;
}
