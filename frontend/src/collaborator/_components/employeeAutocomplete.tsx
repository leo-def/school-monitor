
import { useTranslation } from "react-i18next";
import { CollaboratorAutocomplete, CollaboratorAutocompleteProps } from "./collaboratorAutocomplete";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface EmployeeAutocompleteProps extends Omit<CollaboratorAutocompleteProps, 'roles' | 'label'> {
    readonly label?: string
}

export function EmployeeAutocomplete(props: EmployeeAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' });
    return (<CollaboratorAutocomplete
        {...props}
        roles={[CollaboratorRole.PROFESSOR, CollaboratorRole.MANAGER]}
        label={props.label ?? t('Employee')} />)
}