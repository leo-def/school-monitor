import { Account } from '@prisma/client';

export type UniqueAccountFilter = Partial<
  Pick<Account, 'username' | 'phone' | 'email'>
>;
