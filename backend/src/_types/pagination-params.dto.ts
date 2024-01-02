import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsObject, IsOptional } from 'class-validator';
import { PaginationParamsFilter } from 'src/pagination/_types/dto/filter';
import { PaginationParamsOrderBy } from 'src/pagination/_types/dto/order-by';
import { PaginationParams } from 'src/pagination/_types/dto/params';
import { PaginationField } from 'src/pagination/_types/field';

export class PaginationParamsDto<TField extends PaginationField>
  implements PaginationParams<TField>
{
  @ApiProperty({
    name: 'skip',
    type: Number,
    example: 15,
  })
  @IsOptional()
  @IsInt()
  skip?: number;

  @ApiProperty({
    name: 'take',
    type: Number,
    example: 5,
  })
  @IsOptional()
  @IsInt()
  take?: number;

  @ApiProperty({
    name: 'select',
    type: String,
    isArray: true,
    example: ['id'],
  })
  @IsOptional()
  @IsArray()
  select?: Array<TField>;

  @ApiProperty({
    name: 'orderBy',
    type: Object,
    example: { title: 'asc', createdAt: 'desc' },
  })
  @IsOptional()
  @IsObject()
  orderBy?: PaginationParamsOrderBy<TField>;

  @ApiProperty({
    name: 'filter',
    type: Object,
    example: {
      title: 'Title filter example',
      desc: 'Desc filter example',
      createdAt: new Date(),
    },
  })
  @IsOptional()
  @IsObject()
  filter?: PaginationParamsFilter<TField>;
}
