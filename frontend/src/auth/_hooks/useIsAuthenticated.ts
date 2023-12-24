"use client";

import { useContext, useMemo } from "react";
import { AuthContext } from "../_contexts/authContext";

export function useIsAuthenticated(): boolean {
  const { state } = useContext(AuthContext);
  const hasToken = useMemo(() => !!state?.token, [state]);
  return hasToken;
}
