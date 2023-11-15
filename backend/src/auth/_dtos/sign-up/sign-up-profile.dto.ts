import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpProfileDto {
  @ApiProperty({
    description: 'Account name',
    example: 'Jhon Thou',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Account phone',
    example: '+1019875789',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Account email',
    example: 'jhon@email.com',
  })
  @IsString()
  email: string;
}
