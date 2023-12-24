import { useCallback, useContext } from "react";
import { AuthStorageKeyEnum } from "../_enums/authStorageKey.enum";
import { useAuth } from "./useAuth";
import { AuthContext } from "../_contexts/authContext";

export function useLoadLocalStorageToken() {
  const { state } = useContext(AuthContext);
  const auth = useAuth();
  const func = useCallback(() => {
    const localToken = localStorage.getItem(AuthStorageKeyEnum.AUTH_TOKEN);
    if (localToken && state?.token !== localToken) {
      auth(localToken, true);
    }
  }, [auth, state?.token]);
  return func;
}
