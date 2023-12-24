import { useContext, useMemo } from "react";
import { AuthContext } from "../_contexts/authContext";

export function useGetAuthToken(): string | undefined {
  const { state } = useContext(AuthContext);
  const token = useMemo(() => state?.token, [state]);
  return token;
}
