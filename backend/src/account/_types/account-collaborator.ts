import { Account, Branch, Collaborator, Company } from '@prisma/client';

export type BranchInfo = Branch;

export type CompanyInfo = Company;

export type CollaboratorInfo = Collaborator & {
  company: CompanyInfo;
  branch: BranchInfo;
};

export type AccountCollaborator = Account & {
  collaboratorsList: Array<CollaboratorInfo>;
};
