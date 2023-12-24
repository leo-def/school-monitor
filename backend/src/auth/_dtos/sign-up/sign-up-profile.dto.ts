import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignUpProfileDto {
  @ApiProperty({
    name: 'name',
    type: String,
    description: 'Account name',
    example: 'Jhon Thou',
  })
  @IsString()
  name: string;

  @ApiProperty({
    name: 'phone',
    type: String,
    description: 'Account phone',
    example: '+1019875789',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    name: 'email',
    type: String,
    description: 'Account email',
    example: 'jhon@email.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    name: 'imgId',
    type: String,
    description: 'Account profile image',
    example: '',
  })
  @IsString()
  imgId: string;
}
