export interface AutocompleteFieldData<T = string> {
  options?: Array<string>;
  disabled?: boolean;
  hidden?: boolean;
  onChange?: (value?: T) => Promise<void>;
  value?: T;
}
