import { PaginationParams, PaginationParamsField } from '../_types/params';
import { PaginationQuery } from '../_types/query';
import { PaginationResponse } from '../_types/response';

export class Pagination {
  public static paramsToQuery<
    T extends PaginationParams<PaginationParamsField>,
  >(params: T): PaginationQuery {
    const { skip, take, select, orderBy, filter } = params;
    return {
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
    };
  }

  public static dataToResponse<
    TData,
    TParams extends PaginationParams<PaginationParamsField>,
  >(items: Array<TData>, params: TParams): PaginationResponse<TData, TParams> {
    return {
      items,
      params,
    } as PaginationResponse<TData, TParams>;
  }

  private static expandObject(compactObject: { [x: string]: unknown }) {
    const expandedObject = {};

    for (const key in compactObject) {
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
