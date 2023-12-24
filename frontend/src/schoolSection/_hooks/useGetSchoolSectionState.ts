"use client";
import { useContext } from "react";
import { SchoolSectionContext } from "../_contexts/schoolSectionContext";
import { SchoolSectionState } from "../_types/schoolSectionState";

export function useGetSchoolSectionState(): SchoolSectionState | undefined {
  const { state } = useContext(SchoolSectionContext);
  return state;
}
