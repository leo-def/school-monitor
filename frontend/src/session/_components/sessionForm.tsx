import { Grid } from "@mui/material";
import { BranchAutocomplete } from "@/branch/_components/branchAutocomplete";
import { CompanyAutocomplete } from "@/company/_components/companyAutocomplete";
import { useGetSessionForm } from "../_hooks/useGetSessionForm";

export function SessionForm() {
    const sessionForm = useGetSessionForm()
    if (!sessionForm) {
        return undefined
    }
    const { company, branch } = sessionForm
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <CompanyAutocomplete
                    size="small"
                    disabled={company.disabled}
                    options={company.options}
                    value={company.value}
                    onChange={company.onChange}
                    onObjectChange={company.onObjectChange} />
            </Grid>

            <Grid item xs={12} md={6}>
                <BranchAutocomplete
                    size="small"
                    companyBranch
                    disabled={branch.disabled}
                    options={branch.options}
                    companyId={company.value}
                    value={branch.value}
                    onChange={branch.onChange}
                    onObjectChange={branch.onObjectChange} />
            </Grid>
        </Grid>
    )
}