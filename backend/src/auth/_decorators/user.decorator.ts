import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserInfo } from '../_types/user-info';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserInfo;
  },
);
