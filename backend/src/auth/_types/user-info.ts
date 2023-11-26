import { Account, Branch, Collaborator, Company } from '@prisma/client';

export type BranchInfo = Pick<Branch, 'id' | 'title'>;

export type CompanyInfo = Pick<
  Company & { branchs: Array<BranchInfo> },
  'id' | 'title' | 'branchs'
>;

export type CollaboratorInfo = Pick<
  Collaborator & {
    company: CompanyInfo;
    branch: BranchInfo;
  },
  'id' | 'branch' | 'company' | 'role'
>;

export type UserInfo = Pick<
  Account & { collaboratorsList: Array<CollaboratorInfo> },
  'id' | 'name' | 'username' | 'role' | 'collaboratorsList'
>;
