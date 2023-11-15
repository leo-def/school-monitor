import { GroupAccount, Account } from '@prisma/client';

export type GroupInfo = Pick<GroupAccount, 'role'> &
  Pick<Account, 'id' | 'name' | 'username'>;
