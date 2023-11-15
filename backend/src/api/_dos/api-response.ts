import { ApiResponseCodeEnum } from '../_enums/api-response-code.enum';

export interface ApiResponse<T> {
  data: T;
  code: ApiResponseCodeEnum;
  message?: string;
  error?: string;
}
