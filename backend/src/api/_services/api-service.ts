import { ApiResponse } from '../_dos/api-response';
import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';

export class ApiService {
  static resolveApiResponse<T>(data: T, partial: Partial<ApiResponse<T>>) {
    const code = partial?.code ?? ApiResponseCodeEnum.SUCCESS;
    const response: ApiResponse<T> = {
      ...(partial ?? {}),
      code,
      data,
    };
    return response;
  }
}
