import { useTranslation } from "react-i18next";
import { CollaboratorAutocomplete, CollaboratorAutocompleteProps } from "./collaboratorAutocomplete";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface StudentAutocompleteProps extends Omit<CollaboratorAutocompleteProps,
    'roles' |
    'onFetch' |
    'label' |
    'noOptionText'> {
}

export function StudentAutocomplete(props: StudentAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' });
    return (<CollaboratorAutocomplete
        {...props}
        roles={[CollaboratorRole.STUDENT]}
        label={t('Student')}
        noOptionText={t('No Options')} />)
}