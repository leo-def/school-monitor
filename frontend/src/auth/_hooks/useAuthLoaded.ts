import { useContext } from "react";
import { AuthContext } from "../_contexts/authContext";

export function useAuthLoaded() {
  const { state } = useContext(AuthContext);
  return state?.loaded ?? false;
}
