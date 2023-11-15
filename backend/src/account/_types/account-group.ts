import { Account, GroupAccount } from '@prisma/client';

export type AccountGroup = Account & {
  groups: Array<GroupAccount & { group: Account }>;
};
