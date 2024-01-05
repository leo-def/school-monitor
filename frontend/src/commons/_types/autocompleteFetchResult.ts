import { AutocompleteFetchRequest } from "../_components/autocomplete/autocomplete";
import { AutocompleteItem } from "./autocompleteItem";

export interface AutocompleteFetchResult<T> {
    items?: Array<AutocompleteItem<T>>;
    error?: Error;
    request?: AutocompleteFetchRequest
}