import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@prisma/client';
import { IsString } from 'class-validator';

export class UpdateUsernameRequestDto implements Pick<Account, 'username'> {
  @ApiProperty({
    name: 'username',
    type: String,
  })
  @IsString()
  username: string;
}
