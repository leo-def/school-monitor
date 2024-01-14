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
                    value={company.value?.id}
                    onChange={(value) => company.onChange ? company.onChange(value?.object) : undefined} />
            </Grid>

            <Grid item xs={12} md={6}>
                <BranchAutocomplete
                    size="small"
                    isForCompany
                    disabled={branch.disabled}
                    options={branch.options}
                    companyId={company.value?.id}
                    value={branch.value?.id}
                    onChange={(value) => branch.onChange ? branch.onChange(value?.object) : undefined} />
            </Grid>
        </Grid>
    )
}