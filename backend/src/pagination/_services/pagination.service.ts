import { PrismaClient } from '@prisma/client';
import { PaginationResponse } from '../_types/response';
import { PaginationParams } from '../_types/dto/params';
import { PaginationField } from '../_types/field';
import { PaginationQuery } from '../_types/query/query';

export class Pagination {
  public static paramsToQuery<
    T extends PaginationParams<PaginationField>,
    Extra = object,
  >(params: T, extra: Extra): PaginationQuery & Extra {
    const { skip, take, select, orderBy, filter } = params;
    return {
      ...({
        ...(skip ? { skip } : {}),
        ...(take ? { take } : {}),
        ...(select
          ? {
              select: Pagination.expandObject(
                select.reduce((prev, curr) => ({ ...prev, [curr]: true }), {}),
              ),
            }
          : {}),
        ...(orderBy
          ? {
              orderBy: Pagination.expandObject(orderBy),
            }
          : {}),
        ...(filter
          ? {
              where: Pagination.expandObject(filter),
            }
          : {}),
      } as PaginationQuery),
      ...((extra ?? {}) as Extra),
    };
  }

  public static fetch<TData, TParams extends PaginationParams<PaginationField>>(
    prisma: PrismaClient,
    repository: string,
    params: TParams,
  ): Promise<PaginationResponse<TData, TParams>> {
    const query: PaginationQuery = Pagination.paramsToQuery(params, undefined);
    return prisma.$transaction(async (tx) => {
      const count = await tx[repository].count({ where: query.where });
      const items = await tx[repository].findMany(query);
      return Pagination.dataToResponse(items, params, count);
    });
  }

  public static dataToResponse<
    TData,
    TParams extends PaginationParams<PaginationField>,
  >(
    items: Array<TData>,
    params: TParams,
    count?: number,
  ): PaginationResponse<TData, TParams> {
    return {
      items,
      params,
      count,
    } as PaginationResponse<TData, TParams>;
  }

  private static expandObject(compactObject: { [x: string]: unknown }) {
    const expandedObject = {};

    for (const key in compactObject) {
      if (!key) {
        continue;
      }
      const value = compactObject[key];
      const keys = key.split('.');

      let currentLevel = expandedObject;

      keys.forEach((nestedKey, index) => {
        if (!currentLevel[nestedKey]) {
          if (index === keys.length - 1) {
            currentLevel[nestedKey] = value;
          } else {
            currentLevel[nestedKey] = {};
          }
        }
        currentLevel = currentLevel[nestedKey];
      });
    }

    return expandedObject;
  }
}
