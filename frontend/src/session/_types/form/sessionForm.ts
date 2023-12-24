import { BranchDto } from "@/branch/_types/branch.dto";
import { AutocompleteFieldData } from "@/commons/api/_types/form/autocompleteFieldData";
import { CompanyDto } from "@/company/_types/company.dto";

export interface SessionForm {
  company: AutocompleteFieldData<CompanyDto>;
  branch: AutocompleteFieldData<BranchDto>;
}
