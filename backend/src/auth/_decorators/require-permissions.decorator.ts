import { SetMetadata } from '@nestjs/common';
import { Action, Subject } from '@prisma/client';

export class RequiredPermission {
  action: Action;
  subject: Subject;
}

export const REQUIRED_PERMISSIONS_KEY = 'REQUIRED_PERMISSIONS';

export const RequirePermissions = (action: Action, subject?: Subject) =>
  SetMetadata(REQUIRED_PERMISSIONS_KEY, {
    action,
    subject,
  } as RequiredPermission);
