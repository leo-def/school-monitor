import { useTranslation } from "react-i18next";
import { CollaboratorAutocomplete, CollaboratorAutocompleteProps } from "./collaboratorAutocomplete";
import { CollaboratorRole } from "../_enums/collaboratorRole";

export interface StudentAutocompleteProps extends Omit<CollaboratorAutocompleteProps, 'roles' | 'label'> {
    readonly label?: string
}
export function StudentAutocomplete(props: StudentAutocompleteProps) {
    const { t } = useTranslation('translation', { keyPrefix: 'collaborator.autocomplete' });
    return (<CollaboratorAutocomplete
        {...props}
        roles={[CollaboratorRole.STUDENT]}
        label={props.label ?? t('Student')} />)
}