import { Locale } from "./locale";

export interface LocaleState {
  locale: Locale | undefined;
  loaded: boolean | undefined;
}
