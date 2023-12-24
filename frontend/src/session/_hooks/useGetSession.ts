"use client";
import { useContext } from "react";
import { SessionContext } from "../_contexts/sessionContext";
import { SessionState } from "../_types/sessionState";

export function useGetSession(): SessionState | undefined {
  const { state } = useContext(SessionContext);
  return state;
}
