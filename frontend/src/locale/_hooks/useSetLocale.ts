import { useContext } from "react";
import { LocaleContext } from "../_contexts/localeContext";
import { LocaleActionTypeEnum } from "../_enums/localeActionType.enum";
import { Locale } from "../_types/locale";

export function useSetLocale(): (locale: Locale) => void {
  const { dispatch } = useContext(LocaleContext);
  return (locale: Locale): void => {
    if (dispatch) {
      dispatch({
        type: LocaleActionTypeEnum.SET_LOCALE,
        payload: { locale },
      });
    }
  };
}
