
import { useTranslation } from "react-i18next";
import { CollaboratorAutocomplete, CollaboratorAutocompleteProps } from "./collaboratorAutocomplete";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface EmployeeAutocompleteProps extends Omit<CollaboratorAutocompleteProps,
    'roles' |
    'onFetch' |
    'label' |
    'noOptionText'> {
}

export function EmployeeAutocomplete(props: EmployeeAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' });
    return (<CollaboratorAutocomplete
        {...props}
        roles={[CollaboratorRole.PROFESSOR, CollaboratorRole.MANAGER]}
        label={t('Employee')}
        noOptionText={t('No Options')} />)
}