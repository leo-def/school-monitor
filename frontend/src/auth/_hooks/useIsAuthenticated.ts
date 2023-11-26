import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";

export function useIsAuthenticated(): boolean {
  const { state } = useContext(AuthContext);
  return !!state?.token;
}
