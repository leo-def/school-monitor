import { ApiProperty } from '@nestjs/swagger';
import { SchoolSection } from '@prisma/client';
import { IsString } from 'class-validator';
import { EntityDto } from 'src/_types/entity.dto';

export class SchoolSectionDto extends EntityDto implements SchoolSection {
  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolSubjectId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolClassId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  schoolTermId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  professorId: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  gradeId: string;
}
