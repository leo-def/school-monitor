"use client";

import { SessionStateUtils } from "../_services/sessionStateUtils";
import { SessionForm } from "../_types/form/sessionForm";
import { useGetSession } from "./useGetSession";
import { useSetSessionBranch } from "./useSetSessionBranch";
import { useSetSessionCompany } from "./useSetSessionCompany";

export function useGetSessionForm(): SessionForm | undefined {
  const sessionState = useGetSession();
  const setBranch = useSetSessionBranch();
  const setCompany = useSetSessionCompany();
  if (!sessionState) {
    return undefined;
  }
  return SessionStateUtils.toSectionForm(sessionState, {
    branch: setBranch,
    company: setCompany,
  });
}
