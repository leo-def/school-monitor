import { Account } from '@prisma/client';

export type CheckDuplicateAccountRequestDto = Partial<
  Pick<Account, 'username' | 'phone' | 'email'>
>;
