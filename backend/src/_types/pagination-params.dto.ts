import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsObject } from 'class-validator';
import {
  PaginationParams,
  PaginationParamsField,
  PaginationParamsFilter,
  PaginationParamsOrderBy,
} from 'src/pagination/_types/params';

export class PaginationParamsDto<TField extends PaginationParamsField>
  implements PaginationParams<TField>
{
  @ApiProperty({
    type: Number,
    example: 15,
  })
  @IsInt()
  skip?: number;

  @ApiProperty({
    type: Number,
    example: 5,
  })
  @IsInt()
  take?: number;

  @ApiProperty({
    type: String,
    isArray: true,
    example: ['id'],
  })
  @IsArray()
  select?: Array<TField>;

  @ApiProperty({
    type: Object,
    example: { title: 'asc', createdAt: 'desc' },
  })
  @IsObject()
  orderBy?: PaginationParamsOrderBy<TField>;

  @ApiProperty({
    type: Object,
    example: {
      title: 'Title filter example',
      desc: 'Desc filter example',
      createdAt: new Date(),
    },
  })
  @IsObject()
  filter?: PaginationParamsFilter<TField>;
}
