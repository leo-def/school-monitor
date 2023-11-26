import { LocaleActionTypeEnum } from "../_enums/localeActionType.enum";
import { LocaleAction } from "../_types/localeAction";
import { LocaleState } from "../_types/localeState";

export const localeReducer = (
  state: LocaleState,
  action: LocaleAction
): LocaleState => {
  switch (action.type) {
    case LocaleActionTypeEnum.SET_LOCALE:
      return { ...state, locale: action.payload.locale } as LocaleState;
    case LocaleActionTypeEnum.LOAD_LOCALE:
      return {
        ...state,
        loaded: true,
        locale: action.payload.locale,
      } as LocaleState;
    default:
      return state;
  }
};
