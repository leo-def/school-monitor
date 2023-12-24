export interface AutocompleteFieldData<T = string> {
  value?: string;
  options?: Array<string>;
  disabled?: boolean;
  hidden?: boolean;
  onChange?: (value?: string) => void;
  object?: T;
  onObjectChange?: (value?: T) => void;
}
