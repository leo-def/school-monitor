import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export abstract class SignInDto {
  @ApiProperty({
    name: 'token',
    description: 'Authentication token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNscDk5cjg2NTAwMDB2aTU4b2d4b2cwYXQiLCJuYW1lIjoiQWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiY29sbGFib3JhdG9yc0xpc3QiOltdLCJpYXQiOjE3MDEzNzE1MjYsImV4cCI6MTcwMTM3NTEyNn0.T_Ljp8EBPzNzBA2474QH6qGxbvTTZb7KqNTM1gihHBw',
  })
  @IsString()
  token: string;
}
