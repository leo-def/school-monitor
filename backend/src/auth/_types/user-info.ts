import { Account } from '@prisma/client';
import { GroupInfo } from './group-info';

export type UserInfo = Pick<
  Account & { groups: Array<GroupInfo> },
  'id' | 'name' | 'username' | 'role' | 'isGroup' | 'groups'
>;
