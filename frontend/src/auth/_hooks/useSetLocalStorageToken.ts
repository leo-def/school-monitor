import { useCallback, useContext } from "react";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { AuthContext } from "../_contexts/authContext";

export function useSetLocalStorageToken(): () => void {
  const { state } = useContext(AuthContext);
  const func = useCallback(() => {
    const localToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
    if (!!state?.token && localToken !== state?.token) {
      localStorage.setItem(
        AuthStorageKeyEnum.AUTH_TOKEN,
        JSON.stringify(state?.token)
      );
    }
  }, [state?.token]);
  return func;
}
